import React, {Fragment} from "react";
import {MDBBtn, MDBCardBody, MDBCol, MDBIcon, MDBMask, MDBRow, MDBView} from "mdbreact";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Base64} from "js-base64";

import "./ListItem.scss";

export default ({data, detailLink}) => {
  const {t} = useTranslation();

  const lang = t("CODE");

  const {id, title, companyName, createdDate, careerLevel, description} = data;
  const detailLinkParam = Base64.encode(JSON.stringify({
    id,
  }));

  const payload = () => (
    <MDBView hover className="card mt-3">
      <MDBCardBody className="job-item-wrapper">
        <div className="list-item-inner-wrapper">
          {/*<h4 className="h4-responsive">{type}</h4>*/}
          <div className="text-left"><span className="h4-responsive">{title}</span></div>
          <div className="text-left">
            <MDBRow>
              <MDBCol md="8">
                <span className="h5-responsive text-primary">{companyName}</span>
              </MDBCol>
              <MDBCol md="4">
                {data[`country_${lang}`] || data[`city`] ? <MDBIcon icon="map-marker-alt" className="mr-1"/> : <Fragment></Fragment>}
                <span className="h6-responsive">
                  {data[`city_${lang}`] ? data[`city_${lang}`] + ", " : ""}
                  {data[`country_${lang}`]}
                </span>
              </MDBCol>
            </MDBRow>
          </div>
          <div className="text-left mb-1"><span className="h6-responsive"/>{data[`careerLevel_${lang}`]}</div>
          <div className="text-left"><span className="h6-responsive" dangerouslySetInnerHTML={{__html: description}}/></div>
        </div>
      </MDBCardBody>
      <Link to={`${detailLink}/${detailLinkParam}`} className="text-body">
      <MDBMask className="flex-center" overlay="grey-strong"/>
      </Link>
    </MDBView>
  );

  return payload();
};
