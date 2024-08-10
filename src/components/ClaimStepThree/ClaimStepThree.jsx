export const ClaimStepThree = ({ activeStep, setActiveStep, handleChange, formData, handleSubmit }) => {
    return (
        <section className="py-8 bg-white dark:bg-gray-900 lg:py-0 mx-auto">
            <div className="lg:flex">
                <div className="flex mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0 py:8 lg:py-16 min-h-screen">
                    <div className="w-full">
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-10">
                            <div
                                className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                style={{ width: '60%' }}>&nbsp;
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 mb-4 md:gap-6 md:grid-cols-2 sm:mb-8">
                                <div>
                                    <label htmlFor="number-of-trees"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How
                                        many trees are affected?</label>
                                    <input type="number" name="numberOfTrees" id="number-of-trees"
                                           value={formData.numberOfTrees}
                                           onChange={(e) => handleChange(e.target.name, e.target.value)}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                           placeholder="Number of trees" required/>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="structures-affected"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What
                                        structures have been affected by the tree(s)?</label>
                                    <textarea id="structures-affected" name="structuresAffected" rows="2"
                                              value={formData.structuresAffected}
                                              onChange={(e) => handleChange(e.target.name, e.target.value)}
                                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                              placeholder="e.g., home, garage, shed, patio, etc." required></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="tree-location"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Where
                                        is the tree (or trees)? Check all that apply.</label>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center">
                                            <input type="checkbox" id="front-of-house" name="treeLocation"
                                                   value="Front of house"
                                                   checked={formData.treeLocation?.includes("Front of house")}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value, e.target.checked)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="front-of-house"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Front
                                                of house</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="left-of-house" name="treeLocation"
                                                   value="Left of house"
                                                   checked={formData.treeLocation?.includes("Left of house")}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value, e.target.checked)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="left-of-house"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Left
                                                of house</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="right-of-house" name="treeLocation"
                                                   value="Right of house"
                                                   checked={formData.treeLocation?.includes("Right of house")}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value, e.target.checked)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="right-of-house"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Right
                                                of house</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="checkbox" id="behind-house" name="treeLocation"
                                                   value="Behind the house"
                                                   checked={formData.treeLocation?.includes("Behind the house")}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value, e.target.checked)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 rounded border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="behind-house"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Behind
                                                the house</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="tree-height"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">How
                                        tall is the tree?</label>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center">
                                            <input type="radio" id="tree-height-2-stories" name="treeHeight"
                                                   value="About 2 stories tall"
                                                   checked={formData.treeHeight === "About 2 stories tall"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="tree-height-2-stories"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">About
                                                2 stories tall</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="tree-height-3-stories" name="treeHeight"
                                                   value="About 3 stories tall"
                                                   checked={formData.treeHeight === "About 3 stories tall"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="tree-height-3-stories"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">About
                                                3 stories tall</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="tree-height-more-3-stories" name="treeHeight"
                                                   value="More than 3 stories tall"
                                                   checked={formData.treeHeight === "More than 3 stories tall"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="tree-height-more-3-stories"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">More
                                                than 3 stories tall</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="tree-diameter"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What
                                        is the diameter of the tree?</label>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center">
                                            <input type="radio" id="diameter-golf-ball" name="treeDiameter"
                                                   value="Golf ball"
                                                   checked={formData.treeDiameter === "Golf ball"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="diameter-golf-ball"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Golf
                                                ball</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="diameter-baseball" name="treeDiameter"
                                                   value="Baseball"
                                                   checked={formData.treeDiameter === "Baseball"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="diameter-baseball"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Baseball</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="diameter-basketball" name="treeDiameter"
                                                   value="Basketball"
                                                   checked={formData.treeDiameter === "Basketball"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="diameter-basketball"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Basketball</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="diameter-large" name="treeDiameter"
                                                   value="I can't even wrap my arms around it"
                                                   checked={formData.treeDiameter === "I can't even wrap my arms around it"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="diameter-large"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I
                                                can&apos;t even wrap my arms around it</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="tree-species"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What
                                        kind of tree is it? List the species if you know it.</label>
                                    <input type="text" name="treeSpecies" id="tree-species"
                                           value={formData.treeSpecies}
                                           onChange={(e) => handleChange(e.target.name, e.target.value)}
                                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                           placeholder="Tree species"/>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="tree-planted-location"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Where
                                        is the tree planted?</label>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center">
                                            <input type="radio" id="planted-on-property" name="treePlantedLocation"
                                                   value="On my property"
                                                   checked={formData.treePlantedLocation === "On my property"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="planted-on-property"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">On
                                                my property</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="planted-neighbor-property"
                                                   name="treePlantedLocation"
                                                   value="On my neighbor's property"
                                                   checked={formData.treePlantedLocation === "On my neighbor's property"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="planted-neighbor-property"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">On
                                                my neighbor&apos;s property</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="planted-public-property" name="treePlantedLocation"
                                                   value="On public property"
                                                   checked={formData.treePlantedLocation === "On public property"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="planted-public-property"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">On
                                                public property (e.g., city, municipality, state, federal)</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="tree-resting-location"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Where
                                        is the tree resting?</label>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center">
                                            <input type="radio" id="resting-on-property" name="treeRestingLocation"
                                                   value="On my property only"
                                                   checked={formData.treeRestingLocation === "On my property only"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="resting-on-property"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">On
                                                my property only</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="resting-on-property-neighbor"
                                                   name="treeRestingLocation"
                                                   value="On my property AND my neighbor's property"
                                                   checked={formData.treeRestingLocation === "On my property AND my neighbor's property"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="resting-on-property-neighbor"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">On
                                                my property AND my neighbor&apos;s property</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="resting-on-public-property"
                                                   name="treeRestingLocation"
                                                   value="On my property AND public property"
                                                   checked={formData.treeRestingLocation === "On my property AND public property"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="resting-on-public-property"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">On
                                                my property AND public property</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="house-height"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">If
                                        the tree is resting on your house, how tall is your house?</label>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center">
                                            <input type="radio" id="house-single-story" name="houseHeight"
                                                   value="Single story"
                                                   checked={formData.houseHeight === "Single story"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="house-single-story"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Single
                                                story</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="house-two-stories" name="houseHeight"
                                                   value="Two stories"
                                                   checked={formData.houseHeight === "Two stories"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="house-two-stories"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Two
                                                stories</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="house-more-two-stories" name="houseHeight"
                                                   value="More than two stories tall"
                                                   checked={formData.houseHeight === "More than two stories tall"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="house-more-two-stories"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">More
                                                than two stories tall</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="tree-damage"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Did
                                        the tree break any windows or penetrate the roof requiring need for tarp or
                                        board
                                        up?</label>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center">
                                            <input type="radio" id="tree-damage-yes" name="treeDamage" value="Yes"
                                                   checked={formData.treeDamage === "Yes"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="tree-damage-yes"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="tree-damage-no" name="treeDamage" value="No"
                                                   checked={formData.treeDamage === "No"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="tree-damage-no"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="access-obstacles"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Are
                                        there any obstacles that will make it difficult for us to reach the tree and/or
                                        structure?</label>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center">
                                            <input type="radio" id="obstacles-yes" name="accessObstacles" value="Yes"
                                                   checked={formData.accessObstacles === "Yes"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="obstacles-yes"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                                        </div>
                                        <div className="flex items-center">
                                            <input type="radio" id="obstacles-no" name="accessObstacles" value="No"
                                                   checked={formData.accessObstacles === "No"}
                                                   onChange={(e) => handleChange(e.target.name, e.target.value)}
                                                   className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="obstacles-no"
                                                   className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <button onClick={() => setActiveStep(activeStep - 1)}
                                        className="text-center items-center w-full py-2.5 sm:py-3.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Prev:
                                    Incident Info
                                </button>
                                <button type="submit"
                                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next:
                                    Insurance Info
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
