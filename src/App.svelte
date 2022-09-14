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
    import { fly, fade } from "svelte/transition";
    import { onMount } from "svelte";
    let message = "";
    async function sendWaitlistData() {
        try {
            const name_input = document.getElementById(
                "name"
            ) as HTMLInputElement;
            const name_arr = name_input.value.split(" ");
            var first_name = name_arr[0];
            for (let i = 0; i < name_arr.length - 2; i++) {
                first_name = first_name.concat(" ", name_arr[i + 1]);
            }
            const email = document.getElementById("email") as HTMLInputElement;
            const response = await fetch(
                `https://${window.location.hostname}/addWaitlist`,
                {
                    method: "POST",
                    body: JSON.stringify({
                        email: email.value,
                        first_name: first_name,
                        last_name: name_arr[name_arr.length - 1],
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Please enter valid email address and name.");
            } else {
                message = "You've been successfully added to the waitlist!";
            }
        } catch (err) {
            message = err;
        }
    }
    let animate = false;
    onMount(() => {
        animate = true;
    });
</script>

<main>
    <div class="flex flex-col">
        <div class="flex flex-row items-center justify-center p-6 pt-8">
            <p
                class="text-[2.5rem] h-[0.75] font-extrabold text-center font-Raleway"
            >
                Duelance
            </p>
        </div>
        <div class="flex flex-col space-y-2 items-center justify-end px-4">
            {#if animate}
                <p
                    class="text-5xl text-center font-Raleway font-bold md:text-6xl lg:text-7xl"
                    in:fade={{ duration: 1500 }}
                >
                    Faster, Cheaper, Better
                </p>
                <p
                    class="text-5xl text-center font-Raleway font-bold pb-2 md:text-7xl"
                    id="freelancing-biz-text"
                    in:fade={{ duration: 2500 }}
                    style="transition-delay: 1s;"
                >
                    Freelance Business Management.
                </p>
                <p
                    class="text-3xl text-center font-WorkSans py-2 lg:w-3/4"
                    in:fade={{ duration: 3500 }}
                >
                    Duelance combines all the important aspects of your
                    freelancing business into one intuitive app at a fraction of
                    the cost. Spend more time on your passion, we've got your
                    management covered!
                </p>
                <br />
                <div
                    class="w-full mb-32 mt-2 px-4 pt-2 md:w-4/5 md:mx-auto lg:w-1/2"
                    in:fly={{ duration: 3500, y: 200 }}
                >
                    <form on:submit|preventDefault={sendWaitlistData}>
                        <div class="mb-6">
                            <input
                                type="text"
                                id="name"
                                class="placeholder-grey font-WorkSans focus:placeholder-white bg-white border-2 border-black text-gray-900 text-xl text-center rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Name"
                            />
                        </div>
                        <div class="mb-6">
                            <input
                                type="email"
                                id="email"
                                class="placeholder-grey font-WorkSans focus:placeholder-white bg-white border-2 border-black text-gray-900 text-xl text-center rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Email"
                            />
                        </div>
                        <div
                            class="flex space-y-9 w-full md:w-4/5 md:mx-auto lg:w-full justify-center"
                        >
                            <div class="px-4 py-4 bg-gray-300 rounded-full">
                                <button
                                    class="text-2xl font-bold text-center text-black"
                                    type="submit"
                                    id="submit-button-form"
                                    >Join the Waitlist!</button
                                >
                            </div>
                            <br />
                            <p
                                class="text-center text-black font-WorkSans text-xl pt-5"
                            >
                                {message}
                            </p>
                        </div>
                    </form>
                </div>
            {/if}
        </div>
        <div class="bg-gray-200 flex flex-col p-5 w-full items-center mt-32">
            <h2
                class="font-Raleway font-semibold text-5xl pb-2 pt-4 text-center"
            >
                Easier Management, Greater Productivity.
            </h2>
            <p class="font-Raleway font-medium text-2xl mb-2 text-center">
                👀 at how our product can change your freelancing business
            </p>
            <div
                class="flex flex-row flex-wrap px-5 py-2 justify-evenly mt-5 lg:flex-nowrap"
            >
                <div
                    class="flex flex-col bg-gray-900 p-7 mx-2 mb-4 rounded-3xl lg:justify-evenly lg:w-1/2"
                    in:fly={{ x: -2000, duration: 1000 }}
                >
                    <img
                        src="images/proj-manage-icon.webp"
                        alt=""
                        class="w-1/4 md:w-16"
                    />
                    <h3
                        class="text-white font-Raleway font-semibold text-4xl mb-2"
                    >
                        Project Management
                    </h3>
                    <p class="text-white font-Raleway font-medium text-2xl">
                        Stop forgetting projects and due dates. Start impressing
                        clients and get organized with powerful project
                        management that doesn't overwhelm you.
                    </p>
                </div>
                <div
                    class="flex flex-col bg-gray-900 p-7 mx-2 mb-4 rounded-3xl lg:justify-evenly lg:w-1/2"
                >
                    <img
                        src="images/accounting-icon.webp"
                        alt=""
                        class="w-1/4 md:w-16"
                    />
                    <h3
                        class="text-white font-Raleway font-semibold text-4xl mb-2"
                    >
                        Accounting & Invoicing
                    </h3>
                    <p class="text-white font-Raleway font-medium text-2xl">
                        Finally, accounting that doesn't require you to be a
                        CPA. Sending invoices, receiving payments, maintaining
                        clean books, and filing taxes shouldn't be hectic!
                    </p>
                </div>
            </div>
            <div
                class="flex flex-row flex-wrap px-5 py-2 justify-evenly mb-5 lg:flex-nowrap"
            >
                <div
                    class="flex flex-col bg-gray-900 p-7 mx-2 rounded-3xl mb-4 lg:justify-evenly lg:mb-0 lg:w-1/2"
                >
                    <img
                        src="images/time-icon.webp"
                        alt=""
                        class="w-1/4 md:w-16"
                    />
                    <h3
                        class="text-white font-Raleway font-semibold text-4xl mb-2"
                    >
                        Time Tracking
                    </h3>
                    <p class="text-white font-Raleway font-medium text-2xl">
                        Duelance's time tracking helps you see <br /> the how, what,
                        where, why, when of your time spent. With insights, make
                        informed decisions about spending your time. Work less, earn
                        more!
                    </p>
                </div>
                <div
                    class="flex flex-col bg-gray-900 p-7 mx-2 rounded-3xl lg:justify-evenly lg:w-1/2"
                >
                    <img
                        src="images/tax-icon.webp"
                        alt=""
                        class="w-1/4 md:w-16"
                    />
                    <h3 class="text-white font-Raleway font-semibold text-4xl">
                        Tax Filing
                    </h3>
                    <p class="text-white font-Raleway font-medium text-2xl">
                        A good tax filing a year, keeps the government at pier!
                        Tax season should pass like a breeze with Duelance's tax
                        tracking and filing features!
                    </p>
                </div>
            </div>
        </div>
        <div
            class="flex flex-row flex-wrap items-center p-5 mb-20 md:flex-nowrap md:text-left md:items-start md:mt-5 lg:items-center"
        >
            <div class="flex flex-col items-center md:p-5">
                <h3 class="font-Montserrat font-extrabold text-3xl lg:text-4xl">
                    Have a Bird's Eye View Of Your Clients
                </h3>
                <p class="font-WorkSans font-medium text-xl mb-4 lg:text-2xl">
                    Stay on top of your clients with an organized view of
                    important client details, projects, payments, hours worked,
                    and more!
                </p>
            </div>
            <div class="">
                <img
                    src="images/client-management-ui.webp"
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
                    src="images/accounting-ui.webp"
                    alt=""
                    class="shadow-2xl"
                />
            </div>
            <div
                class="flex flex-col items-center justify-center md:pl-8 md:justify-center"
            >
                <h3 class="font-Montserrat font-extrabold text-3xl lg:text-4xl">
                    Simple, Yet Complete Accounting for the Average Joe
                </h3>
                <p class="font-WorkSans font-medium text-xl lg:text-2xl">
                    Send beautiful invoices, receive payments, maintain your
                    books, and track your taxes. We've got every step of the
                    process covered!
                </p>
            </div>
        </div>
        <div
            class="flex flex-row flex-wrap items-center p-5 mb-20 md:flex-nowrap md:text-left md:items-start lg:items-center"
        >
            <div
                class="flex flex-col items-center text-center md:justify-center md:text-left lg:w-[100%] md:px-5"
            >
                <h3 class="font-Montserrat font-extrabold text-3xl lg:text-4xl">
                    Stop Forgetting Your Projects & Start Hitting Due Dates
                </h3>
                <p class="font-WorkSans font-medium text-xl pb-5 lg:text-2xl">
                    Finish work on time and impress clients with our simple
                    project management features. Don't get overwhelmed by
                    thousands of views and features. Focus on what actually
                    matters!
                </p>
            </div>
            <div class="">
                <img
                    src="images/project-management-ui.webp"
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
                    src="images/time-tracking-ui.webp"
                    alt=""
                    class="shadow-2xl"
                />
            </div>
            <div class="flex flex-col md:pl-8 md:justify-center">
                <h3 class="font-Montserrat font-extrabold text-3xl lg:text-4xl">
                    Increase Efficiency With Insightful Time Tracking
                </h3>
                <p class="font-WorkSans font-medium text-2xl lg:text-2xl">
                    For freelancers time is *literally* money. Track your time
                    and get AI based recommendations on working smarter, not
                    harder!
                </p>
            </div>
        </div>
        <div class="flex flex-col p-10 pb-6" id="footer">
            <div
                class="flex flex-row flex-wrap lg:flex-nowrap items-center justify-center"
            >
                <div
                    class="flex flex-col md:items-center md:text-center lg:text-left lg:items-start"
                >
                    <p
                        class="font-Worksans font-medium text-5xl text-gray-300 pb-2"
                    >
                        Take One Step Towards Revolutionizing Your Freelance
                        Business
                    </p>
                    <!-- <p class="font-Worksans font-normal text-3xl text-white">
                        Duelance centralizes all the operational aspects of your
                        self-employed business to help you save time and hassle.
                    </p> -->
                </div>
                <div
                    class="flex space-y-9 w-full md:w-4/5 md:mx-auto lg:w-full justify-center"
                >
                    <div class="px-4 py-4 bg-white rounded-full">
                        <button
                            class="text-3xl font-bold text-center text-black"
                            on:click={() =>
                                window.scrollTo({ top: 0, behavior: "smooth" })}
                            >Join the Waitlist!</button
                        >
                    </div>
                </div>
            </div>
            <hr class="w-full p-5 mt-8 border-gray-400" />
            <div
                class="flex flex-row flex-wrap justify-between items-center md:flex-nowrap"
            >
                <p
                    class="font-WorkSans font-semibold text-2xl text-gray-300 pb-3 md:text-xl"
                >
                    &copy; 2022 <a href="https://www.linkedin.com/in/namban/"
                        >Naman Bansal</a
                    >
                    & <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/in/sjain07/"
                        >Shreyans Jain</a
                    >
                </p>
                <p
                    class="font-WorkSans font-semibold text-5xl text-white text-center vertical-middle pb-3"
                >
                    Duelance
                </p>
                <p
                    class="font-WorkSans font-semibold text-2xl text-gray-300 md:text-xl"
                >
                    Designed & built by us.<br />
                    <a href="https://icons8.com" class="">Icons by Icons8.</a>
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
    a {
        text-decoration: none;
        color: rgb(209 213 219);
    }
</style>
