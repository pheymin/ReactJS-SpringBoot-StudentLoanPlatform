import React, { useEffect, useState } from 'react'
import UserService from '../services/userService'
import documentService from '../services/documentService';

const UploadDocument = () => {
    const [offerLetter, setOfferLetter] = useState(null);
    const [transcript, setTranscript] = useState(null);
    const [ic, setIc] = useState(null);
    const [documentsExist, setDocumentsExist] = useState(false);
    const [documentData, setDocumentData] = useState([]);

    const userId = localStorage.getItem('userID');

    useEffect(() => {
        documentService.getDocumentsByUserId(userId).then((response) => {
            if (response.data !== null) {
                setDocumentsExist(true);
                setDocumentData(response.data);
            }
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const documents = [];

        if (offerLetter) {
            documents.push({
                userId,
                docType: 'offer-letter',
                file: offerLetter,
            });
        }

        if (transcript) {
            documents.push({
                userId,
                docType: 'transcript',
                file: transcript,
            });
        }

        if (ic) {
            documents.push({
                userId,
                docType: 'ic',
                file: ic,
            });
        }

        try {
            documentService.createDocuments(documents).then((response) => {
                if (response.data == '200') {
                    alert('Document uploaded successfully.');
                    window.location.href = '/borrower/loan-application';
                } else {
                    alert('Document upload failed.');
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    const downloadFile = (fileUrl) => {
        const link = document.createElement('a');
        link.href = "document/" + fileUrl;
        link.download = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
        link.click();
    };

    const formatDocumentType = (documentType) => {
        const formattedType = documentType.split('-').map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');

        return formattedType;
    };


    return (
        <div>
            {documentsExist ? (
                <div>
                    <hr />
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Uploaded Documents</h2>
                    <div className='space-y-5'>
                        {documentData.map((document, index) => (
                            <div key={index} className='flex flex-col space-y-2'>
                                <label>{index + 1}. {formatDocumentType(document.documentType)}</label>
                                <p>Document Name: {document.filePath}</p>
                                <button onClick={() => downloadFile(document.filePath)} className='btn-primary w-1/4'>Download</button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                // Render this if documents do not exist
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <hr />
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Upload Document</h2>
                    <div className='space-y-5'>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="offer-letter">1. University Offer Letter</label>
                            <input
                                type="file"
                                id="offer-letter"
                                accept="application/pdf"
                                onChange={(e) => setOfferLetter(e.target.files[0])}
                                required
                            />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="transcript">2. Academic Transcript</label>
                            <input
                                type="file"
                                id="transcript"
                                accept="application/pdf"
                                onChange={(e) => setTranscript(e.target.files[0])}
                                required
                            />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label htmlFor="ic">3. Identification Card</label>
                            <input
                                type="file"
                                id="ic"
                                accept="image/png, image/jpeg, application/pdf"
                                onChange={(e) => setIc(e.target.files[0])}
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
}

const Profile = () => {
    let userId = localStorage.getItem('userID')
    const [user, setUser] = useState({})

    useEffect(() => {
        if (!userId) {
            window.location.href = '/login'
        }

        UserService.getUserById(userId)
            .then(res => {
                setUser(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div className='w-9/12 mx-auto my-5 md:border rounded-lg md:px-20 md:py-4'>
            <div className="space-y-12">
                <div className='pb-8'>
                    <h2 className=" text-gray-900 mb-4">Profile</h2>

                    <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5 flex flex-col">
                        <div className='self-center'>
                            <img src={user.photoUrl} alt="profile" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                Full Name
                            </label>
                            <p>{user.name}</p>
                        </div>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                Email address
                            </label>
                            <p>{user.email}</p>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                Date of Birth
                            </label>
                            <p>{user.dob}</p>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                Phone Number
                            </label>
                            <p>{user.phone}</p>
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                IC Number
                            </label>
                            <p>{user.ic}</p>
                        </div>

                        <div className="col-span-full">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                Street address
                            </label>
                            <p>{user.street}</p>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                City
                            </label>
                            <p>{user.city}</p>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                State / Province
                            </label>
                            <p>{user.state}</p>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium leading-6 text-gray-400">
                                ZIP / Postal code
                            </label>
                            <p>{user.postcode}</p>
                        </div>
                    </div>
                </div>
                {localStorage.getItem('userType') === 'Borrower' ? (
                    <UploadDocument />
                ) : (<></>)}

            </div>
        </div>
    )
}

export default Profile
