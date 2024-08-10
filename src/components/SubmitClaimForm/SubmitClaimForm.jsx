"use client";

import React, {useEffect, useState} from "react";
import {useRouter, useSearchParams} from 'next/navigation';
import {formatPhone} from "../../../utils/formatPhone";
import {ClaimStepOne} from "@/components/ClaimStepOne/ClaimStepOne";
import {ClaimStepTwo} from "@/components/ClaimStepTwo/ClaimStepTwo";
import {ClaimStepThree} from "@/components/ClaimStepThree/ClaimStepThree";
import {ClaimStepFour} from "@/components/ClaimStepFour/ClaimStepFour";
import {ClaimStepFive} from "@/components/ClaimStepFive/ClaimStepFive";
import Link from "next/link";
import {decodeBase64ToInt} from "@/utils/encode";
import {isArray} from "lodash";

const ENDPOINT_URL = process.env.NEXT_PUBLIC_ENDPOINT_URL;

export const SubmitClaimForm = ({activeStep, setActiveStep, setClaimId, claimId: claim}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const step = searchParams.get('step');
    const claimId = searchParams.get('claimId') ? decodeBase64ToInt(searchParams.get('claimId')) : claim;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        incidentLocation: "",
        incidentDate: "",
        incidentTime: "",
        lossDescription: "",
        numberOfTrees: "",
        structuresAffected: "",
        treeLocation: [],
        treeHeight: "",
        treeDiameter: "",
        treeSpecies: "",
        treePlantedLocation: "",
        treeRestingLocation: "",
        houseHeight: "",
        treeDamage: "",
        accessObstacles: "",
        insuranceCarrier: "",
        insuranceClaimNumber: "",
        insuranceAgent: "",
        agentPhone: "",
        agentEmail: "",
        additionalNotes: "",
        id: claimId || ""
    });

    useEffect(() => {
        if (step) {
            setActiveStep(parseInt(step));
        }
    }, [step, setActiveStep]);

    useEffect(() => {
        const fetchAndSetClaimData = async () => {
            console.log(claimId, "?CLAIM ID?")
            if (claimId) {
                const claimData = await fetchClaimById(claimId);
                setFormData({
                    ...formData, ...claimData,
                    treeLocation: isArray(claimData?.treeLocation) ? claimData?.treeLocation : []
                });
            }
        };

        fetchAndSetClaimData();
    }, [claimId]);

    const fetchClaimById = async (id) => {
        const query = `
            query {
                claim_by_id(id: "${id}") {
                    id
                    firstName
                    lastName
                    phoneNumber
                    email
                    address
                    city
                    state
                    zip
                    incidentLocation
                    incidentDate
                    incidentTime
                    lossDescription
                    numberOfTrees
                    structuresAffected
                    treeLocation
                    treeHeight
                    treeDiameter
                    treeSpecies
                    treePlantedLocation
                    treeRestingLocation
                    houseHeight
                    treeDamage
                    accessObstacles
                    insuranceCarrier
                    insuranceClaimNumber
                    insuranceAgent
                    agentPhone
                    agentEmail
                    additionalNotes
                }
            }
        `;

        const response = await fetch(ENDPOINT_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({query}),
        });

        const result = await response.json();
        if (result.errors) {
            throw new Error("Failed to fetch claim");
        }
        return result.data.claim_by_id;
    };

    const handleChange = (name, value, checked) => {
        if (name === 'phoneNumber' || name === 'agentPhone') {
            return setFormData({...formData, [name]: formatPhone(value)});
        }
        if (name === "treeLocation") {
            setFormData(prevState => {
                const newTreeLocation = checked
                    ? [...prevState.treeLocation, value]
                    : prevState.treeLocation.filter(location => location !== value);
                return {...prevState, treeLocation: newTreeLocation};
            });
        } else {
            setFormData({...formData, [name]: value});
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const buildMutation = () => {
            let mutation = '';
            let dataFields = '';

            if (activeStep === 1) {
                dataFields = `
                firstName: "${formData.firstName}",
                lastName: "${formData.lastName}",
                phoneNumber: "${formData.phoneNumber}",
                email: "${formData.email}",
                address: "${formData.address}",
                city: "${formData.city}",
                state: "${formData.state}",
                zip: "${formData.zip}"
            `;
                mutation = `
                mutation {
                    create_claim_item(data: {${dataFields}}) {
                        id
                    }
                }
            `;
            } else {
                if (formData.incidentLocation) dataFields += `incidentLocation: "${formData.incidentLocation}", `;
                if (formData.incidentDate) dataFields += `incidentDate: "${formData.incidentDate}", `;
                if (formData.incidentTime) dataFields += `incidentTime: "${formData.incidentTime}", `;
                if (formData.lossDescription) dataFields += `lossDescription: "${formData.lossDescription}", `;
                if (formData.numberOfTrees) dataFields += `numberOfTrees: ${formData.numberOfTrees}, `;
                if (formData.structuresAffected) dataFields += `structuresAffected: "${formData.structuresAffected}", `;
                if (formData.treeLocation?.length) dataFields += `treeLocation: [${formData.treeLocation.map(location => `"${location}"`).join(', ')}], `;
                if (formData.treeHeight) dataFields += `treeHeight: "${formData.treeHeight}", `;
                if (formData.treeDiameter) dataFields += `treeDiameter: "${formData.treeDiameter}", `;
                if (formData.treeSpecies) dataFields += `treeSpecies: "${formData.treeSpecies}", `;
                if (formData.treePlantedLocation) dataFields += `treePlantedLocation: "${formData.treePlantedLocation}", `;
                if (formData.treeRestingLocation) dataFields += `treeRestingLocation: "${formData.treeRestingLocation}", `;
                if (formData.houseHeight) dataFields += `houseHeight: "${formData.houseHeight}", `;
                if (formData.treeDamage) dataFields += `treeDamage: "${formData.treeDamage}", `;
                if (formData.accessObstacles) dataFields += `accessObstacles: "${formData.accessObstacles}", `;
                if (formData.insuranceCarrier) dataFields += `insuranceCarrier: "${formData.insuranceCarrier}", `;
                if (formData.insuranceClaimNumber) dataFields += `insuranceClaimNumber: "${formData.insuranceClaimNumber}", `;
                if (formData.insuranceAgent) dataFields += `insuranceAgent: "${formData.insuranceAgent}", `;
                if (formData.agentPhone) dataFields += `agentPhone: "${formData.agentPhone}", `;
                if (formData.agentEmail) dataFields += `agentEmail: "${formData.agentEmail}", `;
                if (formData.additionalNotes) dataFields += `additionalNotes: "${formData.additionalNotes}", `;

                // Remove trailing comma and space
                dataFields = dataFields.trim().replace(/,$/, "");

                mutation = `
                mutation {
                    update_claim_item(id: "${formData.id}", data: {${dataFields}}) {
                        id
                    }
                }
            `;
            }

            return mutation;
        };

        const mutation = buildMutation();

        fetch(ENDPOINT_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({query: mutation}),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.errors) {
                    throw new Error("Submission failed");
                }
                if (activeStep === 1) {
                    const claimId = data.data.create_claim_item.id;
                    setClaimId(claimId);
                    setFormData({...formData, id: claimId});
                }
                setActiveStep(activeStep + 1);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <>
            {activeStep === 1 && (
                <ClaimStepOne
                    setActiveStep={setActiveStep}
                    activeStep={activeStep}
                    handleChange={handleChange}
                    formData={formData}
                    handleSubmit={handleSubmit}
                />
            )}
            {activeStep === 2 && (
                <ClaimStepTwo
                    setActiveStep={setActiveStep}
                    activeStep={activeStep}
                    handleChange={handleChange}
                    formData={formData}
                    handleSubmit={handleSubmit}
                />
            )}
            {activeStep === 3 && (
                <ClaimStepThree
                    setActiveStep={setActiveStep}
                    activeStep={activeStep}
                    handleChange={handleChange}
                    formData={formData}
                    handleSubmit={handleSubmit}
                />
            )}
            {activeStep === 4 && (
                <ClaimStepFour
                    setActiveStep={setActiveStep}
                    activeStep={activeStep}
                    handleChange={handleChange}
                    formData={formData}
                    handleSubmit={handleSubmit}
                />
            )}
            {activeStep === 5 && (
                <ClaimStepFive
                    setActiveStep={setActiveStep}
                    activeStep={activeStep}
                    handleChange={handleChange}
                    formData={formData}
                    handleSubmit={handleSubmit}
                />
            )}
            {activeStep > 5 && (
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center">
                            <h2 className="mb-4 text-3xl tracking-tight font-extrabold lg:text-5xl text-primary-600 dark:text-primary-500">Your
                                Claim Has Been Submitted Successfully</h2>
                            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">We will email you
                                soon with updates about the status of your claim.</p>
                            <Link href="/"
                                  className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back
                                to Homepage</Link>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};
