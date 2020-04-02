import React, {Fragment, useState} from "react";
import {useFormik} from "formik";
import {MDBCard, MDBCardBody, MDBCollapse, MDBCollapseHeader, MDBIcon, MDBInput} from "mdbreact";
import {useTranslation} from "react-i18next";
import {sprintf} from "sprintf-js";

export default ({countries, cities, jobRoles, specialties, industries, careerLevels, employmentTypes, genders, companyTypes, companyNames, dateModified, filter, onChangeFilter}) => {
  const {t} = useTranslation();

  const [collapse, setCollapse] = useState({
    countries: true,
    cities: true,
    jobRoles: true,
  });
  const [seeMore, setSeeMore] = useState({

  });

  const lang = t("CODE");

  const handleCheckChange = (scope, key, checked) => {
    let arr = filter[scope];
    const index = arr.indexOf(key);
    if (checked) {
      if (arr.length === 1 && arr[0] === "") {
        arr = [key];
      } else if (index === -1) {
        arr.push(key);
      }
    } else {
      if (index !== -1) {
        arr.splice(index, 1);
      }
    }
    onChangeFilter({...filter, [scope]: arr});
  };

  // const initialValues = {
  //   count
  // };

  const payload = () => (
    <div className="text-left">
      <MDBCard className="mt-3">
        <MDBCollapseHeader
          className="py-2"
          tagClassName="h6 d-flex justify-content-between"
          onClick={() => setCollapse({...collapse, countries: !collapse.countries})}
        >
          {t("WORK.FIND_JOBS.FIND_JOBS.FILTER.COUNTRY")}
          <MDBIcon icon={!!collapse.countries ? "angle-up" : "angle-down"} />
        </MDBCollapseHeader>
        <MDBCollapse id="country-collapse" isOpen={!!collapse.countries}>
          <MDBCardBody>
            <MDBInput id="country-all" type="checkbox" label={t("COMMON.SCOPE.ALL")} checked={!filter.countries.join(",").length} filled onClick={() => onChangeFilter({...filter, countries: [""]})} />
            {countries.map((item, index) => (
              <MDBInput key={index} id={`country-${item.id}`} type="checkbox" label={sprintf("%s(%d)", item[`country_${lang}`], item.count)} checked={filter.countries.indexOf(String(item.id)) !== -1} filled onClick={() => handleCheckChange("countries", String(item.id), filter.countries.indexOf(String(item.id)) === -1)} />
            ))}
          </MDBCardBody>
        </MDBCollapse>
      </MDBCard>

      <MDBCard>
        <MDBCollapseHeader
          className="py-2"
          tagClassName="h6 d-flex justify-content-between"
          onClick={() => setCollapse({...collapse, cities: !collapse.cities})}
        >
          {t("WORK.FIND_JOBS.FIND_JOBS.FILTER.CITY")}
          <MDBIcon icon={collapse.cities ? "angle-up" : "angle-down"} />
        </MDBCollapseHeader>
        <MDBCollapse id="city-collapse" isOpen={!!collapse.cities}>
          <MDBCardBody>
            <MDBInput id="city-all" type="checkbox" label={t("COMMON.SCOPE.ALL")} checked={!filter.cities.join(",").length} filled onClick={() => onChangeFilter({...filter, cities: [""]})} />
            {cities.map((item, index) => (
              <MDBInput key={index} id={`city-${item.id}`} type="checkbox" label={sprintf("%s(%d)", item[`city_${lang}`], item.count)} checked={filter.cities.indexOf(String(item.id)) !== -1} filled onClick={() => handleCheckChange("cities", String(item.id), filter.cities.indexOf(String(item.id)) === -1)} />
            ))}
          </MDBCardBody>
        </MDBCollapse>
      </MDBCard>

      <MDBCard>
        <MDBCollapseHeader
          className="py-2"
          tagClassName="h6 d-flex justify-content-between"
          onClick={() => setCollapse({...collapse, jobRoles: !collapse.jobRoles})}
        >
          {t("WORK.FIND_JOBS.FIND_JOBS.FILTER.JOB_ROLE")}
          <MDBIcon icon={!!collapse.jobRoles ? "angle-up" : "angle-down"} />
        </MDBCollapseHeader>
        <MDBCollapse id="jobRole-collapse" isOpen={!!collapse.jobRoles}>
          <MDBCardBody>
            <MDBInput id="jobRole-all" type="checkbox" label={t("COMMON.SCOPE.ALL")} checked={!filter.jobRoles.join(",").length} filled onClick={() => onChangeFilter({...filter, jobRoles: [""]})} />
            {jobRoles.map((item, index) => (
              <MDBInput key={index} id={`jobRole-${item.id}`} type="checkbox" label={sprintf("%s(%d)", item[`jobRole_${lang}`], item.count)} checked={filter.jobRoles.indexOf(String(item.id)) !== -1} filled onClick={() => handleCheckChange("jobRoles", String(item.id), filter.jobRoles.indexOf(String(item.id)) === -1)} />
            ))}
          </MDBCardBody>
        </MDBCollapse>
      </MDBCard>

      <MDBCard>
        <MDBCollapseHeader
          className="py-2"
          tagClassName="h6 d-flex justify-content-between"
          onClick={() => setCollapse({...collapse, specialties: !collapse.specialties})}
        >
          {t("WORK.FIND_JOBS.FIND_JOBS.FILTER.SPECIALTY")}
          <MDBIcon icon={!!collapse.specialties ? "angle-up" : "angle-down"} />
        </MDBCollapseHeader>
        <MDBCollapse id="specialties-collapse" isOpen={!!collapse.specialties}>
          <MDBCardBody>
            <MDBInput id="specialties-all" type="checkbox" label={t("COMMON.SCOPE.ALL")} checked={!filter.specialties.join(",").length} filled onClick={() => onChangeFilter({...filter, specialties: [""]})} />
            {specialties.map((item, index) => (
              <MDBInput key={index} id={`specialty-${item.id}`} type="checkbox" label={sprintf("%s(%d)", item[`specialty_${lang}`], item.count)} checked={filter.specialties.indexOf(String(item.id)) !== -1} filled onClick={() => handleCheckChange("specialties", String(item.id), filter.specialties.indexOf(String(item.id)) === -1)} />
            ))}
          </MDBCardBody>
        </MDBCollapse>
      </MDBCard>

      <MDBCard>
        <MDBCollapseHeader
          className="py-2"
          tagClassName="h6 d-flex justify-content-between"
          onClick={() => setCollapse({...collapse, industries: !collapse.industries})}
        >
          {t("WORK.FIND_JOBS.FIND_JOBS.FILTER.INDUSTRY")}
          <MDBIcon icon={!!collapse.industries ? "angle-up" : "angle-down"} />
        </MDBCollapseHeader>
        <MDBCollapse id="industry-collapse" isOpen={!!collapse.industries}>
          <MDBCardBody>
            <MDBInput id="industry-all" type="checkbox" label={t("COMMON.SCOPE.ALL")} checked={!filter.industries.join(",").length} filled onClick={() => onChangeFilter({...filter, industries: [""]})} />
            {industries.map((item, index) => (
              <MDBInput key={index} id={`industry-${item.id}`} type="checkbox" label={sprintf("%s(%d)", item[`sector_${lang}`], item.count)} checked={filter.industries.indexOf(String(item.id)) !== -1} filled onClick={() => handleCheckChange("industries", String(item.id), filter.industries.indexOf(String(item.id)) === -1)} />
            ))}
          </MDBCardBody>
        </MDBCollapse>
      </MDBCard>

      <MDBCard>
        <MDBCollapseHeader
          className="py-2"
          tagClassName="h6 d-flex justify-content-between"
          onClick={() => setCollapse({...collapse, careerLevels: !collapse.careerLevels})}
        >
          {t("WORK.FIND_JOBS.FIND_JOBS.FILTER.CAREER_LEVEL")}
          <MDBIcon icon={!!collapse.careerLevels ? "angle-up" : "angle-down"} />
        </MDBCollapseHeader>
        <MDBCollapse id="careerLevel-collapse" isOpen={!!collapse.careerLevels}>
          <MDBCardBody>
            <MDBInput id="careerLevel-all" type="checkbox" label={t("COMMON.SCOPE.ALL")} checked={!filter.careerLevels.join(",").length} filled onClick={() => onChangeFilter({...filter, careerLevels: [""]})} />
            {careerLevels.map((item, index) => (
              <MDBInput key={index} id={`careerLevel-${item.level}`} type="checkbox" label={sprintf("%s(%d)", item[`careerLevel_${lang}`], item.count)} checked={filter.careerLevels.indexOf(String(item.level)) !== -1} filled onClick={() => handleCheckChange("careerLevels", String(item.level), filter.careerLevels.indexOf(String(item.level)) === -1)} />
            ))}
          </MDBCardBody>
        </MDBCollapse>
      </MDBCard>

      <MDBCard>
        <MDBCollapseHeader
          className="py-2"
          tagClassName="h6 d-flex justify-content-between"
          onClick={() => setCollapse({...collapse, employmentTypes: !collapse.employmentTypes})}
        >
          {t("WORK.FIND_JOBS.FIND_JOBS.FILTER.EMPLOYMENT_TYPE")}
          <MDBIcon icon={!!collapse.employmentTypes ? "angle-up" : "angle-down"} />
        </MDBCollapseHeader>
        <MDBCollapse id="employmentType-collapse" isOpen={!!collapse.employmentTypes}>
          <MDBCardBody>
            <MDBInput id="employmentType-all" type="checkbox" label={t("COMMON.SCOPE.ALL")} checked={!filter.employmentTypes.join(",").length} filled onClick={() => onChangeFilter({...filter, employmentTypes: [""]})} />
            {employmentTypes.map((item, index) => (
              <MDBInput key={index} id={`employmentType-${item.id}`} type="checkbox" label={sprintf("%s(%d)", item[`employmentType_${lang}`], item.count)} checked={filter.employmentTypes.indexOf(String(item.id)) !== -1} filled onClick={() => handleCheckChange("employmentTypes", String(item.id), filter.employmentTypes.indexOf(String(item.id)) === -1)} />
            ))}
          </MDBCardBody>
        </MDBCollapse>
      </MDBCard>

      <MDBCard>
        <MDBCollapseHeader
          className="py-2"
          tagClassName="h6 d-flex justify-content-between"
          onClick={() => setCollapse({...collapse, genders: !collapse.genders})}
        >
          {t("WORK.FIND_JOBS.FIND_JOBS.FILTER.GENDER")}
          <MDBIcon icon={!!collapse.genders ? "angle-up" : "angle-down"} />
        </MDBCollapseHeader>
        <MDBCollapse id="gender-collapse" isOpen={!!collapse.genders}>
          <MDBCardBody>
            <MDBInput id="gender-all" type="checkbox" label={t("COMMON.SCOPE.ALL")} checked={!filter.genders.join(",").length} filled onClick={() => onChangeFilter({...filter, genders: [""]})} />
            {genders.map((item, index) => (
              <MDBInput key={index} id={`gender-${item.gender}`} type="checkbox" label={sprintf("%s(%d)", t(`COMMON.GENDER.${item["gender"]}`), item.count)} checked={filter.genders.indexOf(String(item.gender)) !== -1} filled onClick={() => handleCheckChange("genders", String(item.gender), filter.genders.indexOf(String(item.gender)) === -1)} />
            ))}
          </MDBCardBody>
        </MDBCollapse>
      </MDBCard>

      <MDBCard>
        <MDBCollapseHeader
          className="py-2"
          tagClassName="h6 d-flex justify-content-between"
          onClick={() => setCollapse({...collapse, companyTypes: !collapse.companyTypes})}
        >
          {t("WORK.FIND_JOBS.FIND_JOBS.FILTER.COMPANY_TYPE")}
          <MDBIcon icon={!!collapse.companyTypes ? "angle-up" : "angle-down"} />
        </MDBCollapseHeader>
        <MDBCollapse id="companyType-collapse" isOpen={!!collapse.companyTypes}>
          <MDBCardBody>
            <MDBInput id="companyType-all" type="checkbox" label={t("COMMON.SCOPE.ALL")} checked={!filter.companyTypes.join(",").length} filled onClick={() => onChangeFilter({...filter, companyTypes: [""]})} />
            {companyTypes.map((item, index) => (
              <MDBInput key={index} id={`companyType-${item.companyType}`} type="checkbox" label={sprintf("%s(%d)", t(`COMMON.COMPANY.TYPE.${item["companyType"]}`), item.count)} checked={filter.companyTypes.indexOf(String(item.companyType)) !== -1} filled onClick={() => handleCheckChange("companyTypes", String(item.companyType), filter.companyTypes.indexOf(String(item.companyType)) === -1)} />
            ))}
          </MDBCardBody>
        </MDBCollapse>
      </MDBCard>

      <MDBCard>
        <MDBCollapseHeader
          className="py-2"
          tagClassName="h6 d-flex justify-content-between"
          onClick={() => setCollapse({...collapse, companyNames: !collapse.companyNames})}
        >
          {t("WORK.FIND_JOBS.FIND_JOBS.FILTER.COMPANY_NAME")}
          <MDBIcon icon={!!collapse.companyNames ? "angle-up" : "angle-down"} />
        </MDBCollapseHeader>
        <MDBCollapse id="companyName-collapse" isOpen={!!collapse.companyNames}>
          <MDBCardBody>
            <MDBInput id="companyName-all" type="checkbox" label={t("COMMON.SCOPE.ALL")} checked={!filter.companyNames.join(",").length} filled onClick={() => onChangeFilter({...filter, companyNames: [""]})} />
            {companyNames.map((item, index) => (
              <MDBInput key={index} id={`companyName-${item.companyName}`} type="checkbox" label={sprintf("%s(%d)", item["companyName"], item.count)} checked={filter.companyNames.indexOf(String(item.companyName)) !== -1} filled onClick={() => handleCheckChange("companyNames", String(item.companyName), filter.companyNames.indexOf(String(item.companyName)) === -1)} />
            ))}
          </MDBCardBody>
        </MDBCollapse>
      </MDBCard>
    </div>
  );

  return payload();
}
