'use client'
import React       from "react";
import EmptyFilter from "@/app/components/EmptyFilter";

/**
 * Renders a page that requires user authentication.
 *
 * @param {Object} searchParams - The search parameters.
 * @param {string} searchParams.callbackUrl - The URL to redirect the user after authentication.
 *
 * @return {JSX.Element} - The rendered page component.
 */
export default function Page({searchParams}: { searchParams: { callbackUrl: string } }) {

    return (
        <EmptyFilter
            title={'You need to be logged in to do that!'}
            subtitle={'Please Click bellow to sign in'}
            showLogin={true}
            callbackUrl={searchParams.callbackUrl}/>
    );
}