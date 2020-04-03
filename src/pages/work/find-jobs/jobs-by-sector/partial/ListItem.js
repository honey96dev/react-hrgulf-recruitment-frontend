import React from "react";
import {MDBCardBody, MDBCol, MDBMask, MDBView} from "mdbreact";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

import {getQueryString} from "apis/fetch";

import "./ListItem.scss";

export default ({data, detailLink}) => {
  const {t} = useTranslation();

  const lang = t("CODE");

  const {id, count} = data;
  const detailLinkParam = getQueryString({
    industries: id
  }, true);

  const payload = () => (
    <MDBCol md="4" lg="3" xl="2" className="mb-3 mb-md-4">
      <MDBView hover className="card">
        <MDBCardBody className="sector-item-wrapper">
          <div className="list-item-inner-wrapper">
            {/*<h4 className="h4-responsive">{type}</h4>*/}
            <div className="text-center mb-sm-1 mb-md-2"><span className="h2-responsive">{count}</span></div>
            <div className="text-center mb-sm-1 mb-md-2 text-primary"><span className="h5-responsive">{data[`sector_${lang}`]}</span></div>
          </div>
        </MDBCardBody>
        <Link to={`${detailLink}${detailLinkParam}`} className="text-body">
        <MDBMask className="flex-center" overlay="grey-strong">
        </MDBMask>
        </Link>
      </MDBView>
    </MDBCol>
  );

  return payload();
};
