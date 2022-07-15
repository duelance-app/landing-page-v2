<!-- /******************************************************************************************************************
 * Copyright 2022 Shreyans Jain <shreyans@duelance.app> and Naman Bansal <naman@duelance.app> - All Rights Reserved
 * 
 * This file is part of the Duelance project.
 * 
 * Unauthorized copying of this file, via any medium is strictly prohibited without the express
 * permission of Shreyans Jain and Naman Bansal.
 * Proprietary and confidential
 *******************************************************************************************************************/ -->
<script lang="ts">
</script>

<main>
    <div class="flex flex-col">
        <div class="flex flex-row items-center justify-between p-2">
            <p class="text-3xl font-extrabold text-center font-Raleway">
                Duelance
            </p>
            <div
                class="px-4 py-4 bg-gray-100 bg-opacity-50 border-2 rounded-full border-white"
            >
                <p class="text-xl font-bold text-center">Join the Waitlist!</p>
            </div>
        </div>
        <div
            class="flex flex-col my-7 space-y-2 items-center justify-end px-4 pt-5 mt-10"
        >
            <p
                class="text-5xl text-center font-Raleway font-bold md:text-6xl lg:text-7xl"
            >
                Tools to Grow Your
            </p>
            <p
                class="text-6xl text-center font-Raleway font-bold pb-2 md:text-7xl"
                id="freelancing-biz-text"
            >
                Freelancing Business.
            </p>
            <p class="text-2xl text-center font-medium py-2">
                <strong>Duelance </strong>has
                <strong> all the tools you need </strong>
                - project management, accounting, <br /> invoicing, time
                tracking,
                <strong> and more. </strong>
            </p>
        </div>
        <div class="w-full mb-32 mt-2 px-4 md:w-4/5 md:mx-auto lg:w-1/2">
            <form>
                <div class="mb-6">
                    <input
                        type="text"
                        id="name"
                        class="bg-white border-2 border-black text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John Doe"
                    />
                </div>
                <div class="mb-6">
                    <input
                        type="email"
                        id="email"
                        class="bg-white border-2 border-black text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="johnd@example.com"
                    />
                </div>
                <div class="text-center">
                    <button
                        type="submit"
                        id="submit-button-form-top"
                        class="px-5 py-2.5 text-white rounded-full text-2xl font-Raleway font-semibold focus:outline-white hover:shadow-lg"
                        >Join The Waitlist</button
                    >
                </div>
            </form>
        </div>
        <div class="bg-gray-200 flex flex-col p-5 w-full items-center">
            <h2
                class="font-Raleway font-semibold text-5xl pb-2 pt-4 text-center"
            >
                What We're Building
            </h2>
            <p class="font-Raleway font-medium text-2xl mb-2 text-center">
                👀 at how our product can change your freelancing business
            </p>
            <div
                class="flex flex-row flex-wrap px-5 py-2 justify-evenly mt-5 lg:flex-nowrap"
            >
                <div
                    class="flex flex-col bg-gray-900 p-7 mx-2 mb-4 rounded-3xl lg:justify-evenly"
                >
                    <img
                        src="images/proj-manage-icon.png"
                        alt=""
                        class="w-1/4 md:w-16"
                    />
                    <h3
                        class="text-white font-Raleway font-semibold text-4xl mb-2"
                    >
                        Project Management
                    </h3>
                    <p class="text-white font-Raleway font-medium text-2xl">
                        Never miss a due date again with simple, yet powerful
                        tools to manage all your projects. Have a bird's eye
                        view of what you're working on!
                    </p>
                </div>
                <div
                    class="flex flex-col bg-gray-900 p-7 mx-2 mb-4 rounded-3xl lg:justify-evenly"
                >
                    <img
                        src="images/accounting-icon.png"
                        alt=""
                        class="w-1/4 md:w-16"
                    />
                    <h3
                        class="text-white font-Raleway font-semibold text-4xl mb-2"
                    >
                        Accounting & Invoicing
                    </h3>
                    <p class="text-white font-Raleway font-medium text-2xl">
                        Take the stress out of recording payments, expenses,
                        taxes, and more. Get paid on time with easy to send,
                        detailed invoices.
                    </p>
                </div>
            </div>
            <div
                class="flex flex-row flex-wrap px-5 py-2 justify-evenly mb-5 lg:flex-nowrap"
            >
                <div
                    class="flex flex-col bg-gray-900 p-7 mx-2 rounded-3xl mb-4 lg:justify-evenly lg:mb-0"
                >
                    <img
                        src="images/time-icon.png"
                        alt=""
                        class="w-1/4 md:w-16"
                    />
                    <h3
                        class="text-white font-Raleway font-semibold text-4xl mb-2"
                    >
                        Time Tracking
                    </h3>
                    <p class="text-white font-Raleway font-medium text-2xl">
                        Increase your efficiency by tracking how much time you
                        spend on tasks. Simple, fast, and accurate.
                    </p>
                </div>
                <div
                    class="flex flex-col bg-gray-900 p-7 mx-2 rounded-3xl lg:justify-evenly"
                >
                    <img
                        src="images/tax-icon.png"
                        alt=""
                        class="w-1/4 md:w-16"
                    />
                    <h3
                        class="text-white font-Raleway font-semibold text-4xl mb-2"
                    >
                        Tax Filing
                    </h3>
                    <p class="text-white font-Raleway font-medium text-2xl">
                        A good tax filing a year, keeps the government at pier!
                        Tax season shouldn't be hectic now!
                    </p>
                </div>
            </div>
        </div>
        <div
            class="flex flex-row flex-wrap items-center p-5 mb-20 md:flex-nowrap md:text-left md:items-start md:mt-5 lg:items-center"
        >
            <div class="flex flex-col items-center md:p-5">
                <h3 class="font-Montserrat font-extrabold text-4xl">
                    Stay On Top Of Your Clients
                </h3>
                <p class="font-WorkSans font-medium text-2xl mb-4">
                    Find the most important client-related details in minutes.
                    No more scrolling through emails.
                </p>
            </div>
            <div class="">
                <img
                    src="images/client-management-ui.png"
                    alt=""
                    class="shadow-2xl"
                />
            </div>
        </div>
        <div
            class="flex flex-row flex-wrap items-center p-5 mb-20 text-center md:flex-nowrap md:text-left md:items-center"
        >
            <div class="pb-5">
                <img src="images/accounting-ui.png" alt="" class="shadow-2xl" />
            </div>
            <div
                class="flex flex-col items-center justify-center md:pl-8 md:justify-center"
            >
                <h3 class="font-Montserrat font-extrabold text-4xl">
                    Simple Accounting For Pro Users.
                </h3>
                <p class="font-WorkSans font-medium text-2xl">
                    Simple, yet powerful features to track your income,
                    expenses, and taxes. Beautiful graphs to show it all.
                </p>
            </div>
        </div>
        <div
            class="flex flex-row flex-wrap items-center p-5 mb-20 md:flex-nowrap md:text-left md:items-center"
        >
            <div
                class="flex flex-col items-center text-center md:pr-5 md:justify-center md:text-left"
            >
                <h3 class="font-Montserrat font-extrabold text-4xl">
                    Project Management To Keep You Sane.
                </h3>
                <p class="font-WorkSans font-medium text-2xl pb-5">
                    Lorem ipsum dolor set amit some other stuff
                </p>
            </div>
            <div class="">
                <img
                    src="images/project-management-ui.png"
                    alt=""
                    class="shadow-2xl"
                />
            </div>
        </div>
        <div
            class="flex flex-row flex-wrap items-center p-5 mb-20 text-center md:flex-nowrap md:text-left md:items-center"
        >
            <div class="pb-5">
                <img
                    src="images/time-tracking-ui.png"
                    alt=""
                    class="shadow-2xl"
                />
            </div>
            <div class="flex flex-col md:pl-8 md:justify-center">
                <h3 class="font-Montserrat font-extrabold text-4xl">
                    Time Tracking For Whosever It May Concern.
                </h3>
                <p class="font-WorkSans font-medium text-2xl">
                    Lorem ipsum dolor set amit some other stuff
                </p>
            </div>
        </div>
        <div class="flex flex-col p-10" id="footer">
            <div class="flex flex-row flex-wrap lg:flex-nowrap lg:mr-2">
                <div
                    class="flex flex-col md:items-center md:text-center lg:text-left lg:items-start"
                >
                    <h2
                        class="font-WorkSans font-medium text-5xl text-white pb-2"
                    >
                        Join The Waitlist Now
                    </h2>
                    <p
                        class="font-Worksans font-medium text-3xl text-gray-300 pb-4"
                    >
                        Be The First To Get To Know About Our Launch
                    </p>
                    <p class="font-Worksans font-normal text-2xl text-white">
                        For creatives like you, time is literally money.
                        Duelance centralizes all the operational aspects of your
                        self-employed business to help you save time and hassle.
                        Now, you don't need to switch between ten different apps
                        for ten different tasks. Everything in one place.
                    </p>
                </div>
                <div
                    class="space-y-9 mt-10 w-full md:w-4/5 md:mx-auto lg:w-full"
                >
                    <form>
                        <div class="mb-6">
                            <input
                                type="text"
                                id="name"
                                class="bg-white border-2 border-black text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John Doe"
                            />
                        </div>
                        <div class="mb-6">
                            <input
                                type="email"
                                id="email"
                                class="bg-white border-2 border-black text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="johnd@example.com"
                            />
                        </div>
                        <div class="text-center">
                            <button
                                id="submit-button"
                                type="submit"
                                class="text-white bg-black hover:bg-grey-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-2xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >Join The Waitlist</button
                            >
                        </div>
                    </form>
                </div>
            </div>
            <hr class="w-full p-5 mt-8 border-gray-400" />
            <div
                class="flex flex-row flex-wrap justify-between items-center md:flex-nowrap"
            >
                <p
                    class="font-WorkSans font-semibold text-2xl text-gray-300 md:text-xl"
                >
                    © 2022 Duelance Inc.
                </p>
                <p class="font-WorkSans font-semibold text-5xl text-white">
                    Duelance
                </p>
                <p
                    class="font-WorkSans font-semibold text-2xl text-gray-300 md:text-xl"
                >
                    Icons Credit: <a href="https://icons8.com" class=""
                        >icons8.com</a
                    >
                </p>
            </div>
        </div>
    </div>
</main>

<style>
    input::placeholder {
        text-align: center;
        font-size: 1.2rem;
    }
    #freelancing-biz-text {
        color: #0084ce;
    }
    #footer {
        background-color: #252d48;
    }
    #submit-button {
        background-color: #dadada;
        color: #423d3d;
    }
    a {
        text-decoration: none;
        color: rgb(209 213 219);
    }
    #submit-button-form-top {
        background-color: black;
    }
</style>
