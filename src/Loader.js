import * as React from "react";

export const Loader = ({ showLoader, children }) => {
    if (showLoader) return (<div>Loading...</div>);
    return (
        <>
            {children}
        </>
    );
}