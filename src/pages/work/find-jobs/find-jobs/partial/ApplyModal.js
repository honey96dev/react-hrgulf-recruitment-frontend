import React, {Fragment} from "react";
import {MDBBtn, MDBCol, MDBIcon, MDBModal, MDBModalBody, MDBModalFooter, MDBModalHeader, MDBRow} from "mdbreact";
import {useTranslation} from "react-i18next";
import numeral from "numeral";

import "./ApplyModal.scss";

export default ({modal, data, onClose, onApply}) => {
  const {t} = useTranslation();

  const lang = t("CODE");

  const {id, title, companyName, createdDate, careerLevel, description, skills} = data;

  const payload = () => (
    <MDBModal isOpen={!!modal.show} toggle={onClose} centered size="lg" backdropClassName="modal-backdrop">
      <MDBModalHeader toggle={onClose}>{modal.title}</MDBModalHeader>
      <MDBModalBody className="text-left">
        <div className="h4-responsive font-weight-bold">{title}</div>
        <div className="h5-responsive">{companyName}</div>
        <MDBRow>
          <MDBCol md="6">
            <div>
              {data[`country_${lang}`] || data[`city`] ? <MDBIcon icon="map-marker-alt" className="mr-2"/> : <Fragment></Fragment>}
              <span className="h6-responsive">
                        {data[`city_${lang}`] ? data[`city_${lang}`] + ", " : ""}
                {data[`country_${lang}`]}
                      </span>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <span>{t("WORK.FIND_JOBS.FIND_JOBS.DATE_POSTED")}: </span>
            <span>{data[`createdDate_${lang}`]}</span>
          </MDBCol>
        </MDBRow>
        <div className="d-flex mt-2">
          <MDBBtn color="primary" size="sm" rounded onClick={e => !!onApply && onApply(data)} disabled={!!modal.isSubmitting}>{t("COMMON.BUTTON.APPLY")}</MDBBtn>
        </div>
        <hr/>
        <div className="job-information-wrapper grey-text">
          <div className="job-title-wrapper">
            <div className="h4-responsive font-weight-bold">{t("WORK.FIND_JOBS.FIELDS.DESCRIPTION")}</div>
            <div className="h6-responsive" dangerouslySetInnerHTML={{__html: description}}/>
          </div>
          <div className="job-skills-wrapper">
            <div className="h4-responsive font-weight-bold">{t("WORK.FIND_JOBS.FIELDS.SKILLS")}</div>
            <div className="h6-responsive" dangerouslySetInnerHTML={{__html: skills}}/>
          </div>
          {/*<div className="job-skills-wrapper">*/}
          {/*  <div className="h4-responsive font-weight-bold">{t("WORK.FIND_JOBS.FIELDS.SKILLS")}</div>*/}
          {/*  <div className="h6-responsive" dangerouslySetInnerHTML={{__html: skills}}/>*/}
          {/*</div>*/}
          <div className="job-details-wrapper">
            <div className="h4-responsive font-weight-bold">{t("WORK.FIND_JOBS.FIELDS.DETAILS")}</div>
            <div className="h6-responsive mb-3">
              <MDBRow>
                <MDBCol md="5">
                  <span className="font-weight-bold">{t("WORK.FIND_JOBS.FIELDS.LOCATION")}</span>
                </MDBCol>
                <MDBCol md="7">
                  <span>
                    {data[`city_${lang}`] ? data[`city_${lang}`] + ", " : ""}
                    {data[`country_${lang}`]}
                  </span>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="5">
                  <span className="font-weight-bold">{t("WORK.FIND_JOBS.FIELDS.INDUSTRY")}</span>
                </MDBCol>
                <MDBCol md="7">
                  {!!data[`companySector_${lang}`] && <span>
                    {data[`companySector_${lang}`]} {data[`companyIndustry_${lang}`]}
                  </span>}
                  {!data[`companySector_${lang}`] && <span>_</span>}
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="5">
                  <span className="font-weight-bold">{t("WORK.FIND_JOBS.FIELDS.COMPANY_TYPE")}</span>
                </MDBCol>
                <MDBCol md="7">
                  <span>{data["companyType"] && t(`COMMON.COMPANY.TYPE.${data["companyType"]}`)}</span>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="5">
                  <span className="font-weight-bold">{t("WORK.FIND_JOBS.FIELDS.ROLE")}</span>
                </MDBCol>
                <MDBCol md="7">
                  <span>{data[`jobRole_${lang}`]} - {data[`jobSubrole_${lang}`]}</span>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="5">
                  <span className="font-weight-bold">{t("WORK.FIND_JOBS.FIELDS.EMPLOYMENT_TYPE")}</span>
                </MDBCol>
                <MDBCol md="7">
                  <span>{data[`employmentType_${lang}`] || "_"}</span>
                  {/*<span>{!!data[`employmentType_${lang}`] || t("COMMON.VALUES.UNDEFINED")}</span>*/}
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="5">
                  <span className="font-weight-bold">{t("WORK.FIND_JOBS.FIELDS.SALARY_RANGE")}</span>
                </MDBCol>
                <MDBCol md="7">
                  {!!data["minSalary"] && <span>
                    ${numeral(data["minSalary"]).format("0,0")} -
                    ${numeral(data["maxSalary"]).format("0,0")}
                  </span>}
                  {!data["minSalary"] && <span>_</span>}
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="5">
                  <span className="font-weight-bold">{t("WORK.FIND_JOBS.FIELDS.VACANCIES_COUNT")}</span>
                </MDBCol>
                <MDBCol md="7">
                  <span>{!!data["vacanciesCount"] ? data["vacanciesCount"] : "_"}</span>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
        </div>
      </MDBModalBody>
      <MDBModalFooter>
        {/*<MDBBtn type="button" color="primary" size="sm" rounded onClick={e => {!!onApply && onApply(data); !!onClose && onClose();}}>{t("COMMON.BUTTON.APPLY")}</MDBBtn>*/}
        {/*<MDBBtn type="button" color="secondary" size="sm" rounded onClick={onClose}>{t("COMMON.BUTTON.CANCEL")}</MDBBtn>*/}
      </MDBModalFooter>
    </MDBModal>
  );

  return payload();
};
