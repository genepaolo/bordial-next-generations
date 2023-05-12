import React from "react";

const PageTitle = (props: any) => {

    return(
        <div className="page-title container-fluid">
            <p className="page-title__p">
                {props.title.toUpperCase()}
            </p>
        </div>
    );
};

export default PageTitle;