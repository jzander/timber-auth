"use client"
import {MobileJobsLayout} from "@/components/MobileJobsLayout/MobileJobsLayout";
import {DesktopJobsTable} from "@/components/DesktopJobsTable/DesktopJobsTable";
import Script from "next/script";
import {useState} from "react";
import {UpdateJobModal} from "@/components/UpdateJobModal/UpdateJobModal";

const jobs = [
    {
        type: 'Tree Removal',
        address: '123 Maple St',
        city: 'Springfield',
        state: 'IL',
        zip: '62701',
        eta: '3 Days',
        description: 'Removal of a large oak tree that is leaning dangerously towards a house.',
        submitted: '5/01/24',
        requested: '9/5/24',
        timeTracking: '5:30/8:00',
        id: 202,
        progress: '0%',
        status: 'unassigned'
    },
    {
        type: 'Stump Grinding',
        address: '456 Elm Dr',
        city: 'Columbus',
        state: 'OH',
        zip: '43215',
        eta: '1 Day',
        description: 'Grinding down an old stump in the backyard to make room for a garden.',
        submitted: '4/28/24',
        requested: '9/8/24',
        timeTracking: '2:15/4:00',
        id: 203,
        progress: '0%',
        status: 'unassigned'
    },
    {
        type: 'Tree Trimming',
        address: '789 Pine Ln',
        city: 'Austin',
        state: 'TX',
        zip: '73301',
        eta: '2 Days',
        description: 'Trimming branches hanging over the driveway to prevent potential damage.',
        submitted: '5/10/24',
        requested: '9/6/24',
        timeTracking: '6:00',
        id: 204,
        progress: '100%',
        status: 'completed'
    },
    {
        type: 'Tree Only',
        address: '234 Robbins Ln',
        city: 'Chicopee',
        state: 'MA',
        zip: '01013',
        eta: '2 Days',
        description: 'Description about the job goes here regarding tree work and service.',
        submitted: '4/24/24',
        requested: '9/3/24',
        timeTracking: '6:47/8:00',
        id: 205,
        progress: '0%',
        status: 'unassigned'
    },
    {
        type: 'Emergency Tree Service',
        address: '321 Oak Ave',
        city: 'Madison',
        state: 'WI',
        zip: '53703',
        eta: 'Immediate',
        description: 'Emergency removal of a tree that fell on the garage during a storm.',
        submitted: '5/02/24',
        requested: '9/7/24',
        timeTracking: '10:00',
        id: 206,
        progress: '100%',
        status: 'completed'
    },
    {
        type: 'Tree Pruning',
        address: '654 Birch Rd',
        city: 'Seattle',
        state: 'WA',
        zip: '98101',
        eta: '4 Days',
        description: 'Pruning several fruit trees to promote healthy growth and increase yield.',
        submitted: '5/05/24',
        requested: '9/9/24',
        timeTracking: '3:45/5:00',
        id: 207,
        progress: '40%',
        status: 'active'
    },
    {
        type: 'Brush Removal',
        address: '987 Cedar St',
        city: 'Denver',
        state: 'CO',
        zip: '80201',
        eta: '3 Days',
        description: 'Clearing dense brush and small trees from a large backyard.',
        submitted: '5/08/24',
        requested: '9/4/24',
        timeTracking: '6:00/7:30',
        id: 208,
        progress: '70%',
        status: 'active'
    },
    {
        type: 'Tree Only',
        address: '246 Maplewood Dr',
        city: 'Portland',
        state: 'OR',
        zip: '97201',
        eta: '2 Days',
        description: 'Description about the job goes here regarding tree work and service.',
        submitted: '4/27/24',
        requested: '9/10/24',
        timeTracking: '9:00',
        id: 209,
        progress: '100%',
        status: 'completed'
    },
    {
        type: 'Land Clearing',
        address: '135 Aspen Cir',
        city: 'Phoenix',
        state: 'AZ',
        zip: '85001',
        eta: '5 Days',
        description: 'Clearing an overgrown lot to prepare for new construction.',
        submitted: '5/11/24',
        requested: '9/11/24',
        timeTracking: '9:30/11:00',
        id: 210,
        progress: '55%',
        status: 'active'
    },
    {
        type: 'Tree Inspection',
        address: '753 Willow Ln',
        city: 'Orlando',
        state: 'FL',
        zip: '32801',
        eta: '2 Days',
        description: 'Inspecting trees for signs of disease or infestation.',
        submitted: '5/13/24',
        requested: '9/12/24',
        timeTracking: '1:30/3:00',
        id: 211,
        progress: '80%',
        status: 'active'
    }
];


export const JobsTable = ({activeTab}) => {
    const [activeJob, setActiveJob] = useState(null)
    return (
        <>
            <Script src={'https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js'}/>
            <section class="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
                <div class="mx-auto max-w-7xl px-4 lg:px-12">
                    <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                        <div class="overflow-x-auto">
                            <DesktopJobsTable setActiveJob={setActiveJob} jobs={activeTab === 'All Jobs' ? jobs : jobs.filter((job)=> job.status === activeTab.toLowerCase())}/>
                            <div className="md:hidden">
                                <MobileJobsLayout setActiveJob={setActiveJob} jobs={activeTab === 'All Jobs' ? jobs : jobs.filter((job)=> job.status === activeTab.toLowerCase())}/>
                            </div>
                        </div>
                    </div>
                </div>
                {activeJob && <UpdateJobModal activeJob={activeJob} setActiveJob={setActiveJob}/>}
            </section>
        </>
    )
}