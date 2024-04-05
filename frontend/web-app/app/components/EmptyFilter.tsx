'use client'

import React            from 'react'
import {Button}         from 'flowbite-react'
// @ts-ignore
import {useParamsStore} from "@/hooks/useParamStore";
import Heading          from "@/app/components/Heading";
import {signIn}         from "next-auth/react";


/**
 * Represents the Props class.
 * @typedef {Object} Props
 * @property {string} [title] - The title.
 * @property {string} [subtitle] - The subtitle.
 * @property {boolean} [showReset] - Indicates whether to show the reset button.
 * @property {boolean} [showLogin] - Indicates whether to show the login button.
 * @property {string} [callbackUrl] - The callback URL.
 */
type Props = {
    title?: string
    subtitle?: string
    showReset?: boolean
    showLogin?: boolean
    callbackUrl?: string
}

/**
 * Renders a filter component with an empty state.
 *
 * @param {object} props - The properties passed to the component.
 * @param {string} props.title - The title to display when there are no matches for the filter.
 * @param {string} props.subtitle - The subtitle to display when there are no matches for the filter.
 * @param {boolean} props.showReset - Indicates whether to show the "Remove Filters" button.
 * @param {boolean} props.showLogin - Indicates whether to show the login button.
 * @param {string} props.callbackUrl - The callback URL for the login button.
 *
 * @returns {React.Component} - The rendered component.
 */
export default function EmptyFilter({
                                        title = 'No matches for this filter',
                                        subtitle = 'Try changing or resetting the filter',
                                        showReset,
                                        showLogin,
                                        callbackUrl
                                    }: Props) {
    const reset = useParamsStore((state) => state.reset);

    return (
        <div className='h-[40vh] flex flex-col gap-2 justify-center items-center shadow-lg'>
            <Heading title={title} subTitle={subtitle} center/>
            <div className='mt-4'>
                {showReset && (
                    <Button outline onClick={reset}>Remove Filters</Button>
                )}
                {showLogin && (
                    <Button outline onClick={() => signIn('id-server', {callbackUrl})}>Login</Button>
                )}

            </div>
        </div>
    )
}