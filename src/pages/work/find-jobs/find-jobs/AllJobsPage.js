import React, {Fragment, useEffect, useMemo, useState} from "react";
import {MDBAlert, MDBBreadcrumb, MDBBreadcrumbItem, MDBCol, MDBRow} from "mdbreact";
import {useTranslation} from "react-i18next";
import {animateScroll as scroll} from "react-scroll";
import {Helmet} from "react-helmet";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import {DELAY, EFFECT, LAYOUT, RESULT} from "core/globals";
import routes from "core/routes";
import Loading from "components/Loading";
import ErrorNoData from "components/ErrorNoData";
import toast from "components/MyToast";
import Service from "services/work/find-jobs/FindJobsService";
import Filter from "./partial/Filter";
import ListView from "./partial/ListView";

import "./AllJobsPage.scss";
import {getQueryString} from "apis/fetch";
import useDebounce from "helpers/useDebounce";

export default ({history}) => {
  const {t} = useTranslation();

  const params = new URLSearchParams(history.location.search);
  const urlSearch = {
    countries: params.get("countries") || "",
    cities: params.get("cities") || "",
    jobRoles: params.get("jobRoles") || "",
    specialties: params.get("specialties") || "",
    industries: params.get("industries") || "",
    careerLevels: params.get("careerLevels") || "",
    employmentTypes: params.get("employmentTypes") || "",
    genders: params.get("genders") || "",
    companyTypes: params.get("companyTypes") || "",
    companyNames: params.get("companyNames") || "",
    dateModified: params.get("dateModified") || "",
  };
  const filter = {
    countries: urlSearch.countries.split(","),
    cities: urlSearch.cities.split(","),
    jobRoles: urlSearch.jobRoles.split(","),
    specialties: urlSearch.specialties.split(","),
    industries: urlSearch.industries.split(","),
    careerLevels: urlSearch.careerLevels.split(","),
    employmentTypes: urlSearch.employmentTypes.split(","),
    genders: urlSearch.genders.split(","),
    companyTypes: urlSearch.companyTypes.split(","),
    companyNames: urlSearch.companyNames.split(","),
    dateModified: urlSearch.dateModified.split(","),
  };

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({});
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobRoles, setJobRoles] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [careerLevels, setCareerLevels] = useState([]);
  const [employmentTypes, setEmploymentTypes] = useState([]);
  const [genders, setGenders] = useState([]);
  const [companyTypes, setCompanyTypes] = useState([]);
  const [companyNames, setCompanyNames] = useState([]);
  const [dateModified, setDateModified] = useState([]);
  const [items, setItems] = useState([]);

  const pageTitle = t("NAVBAR.WORK.FIND_JOBS.FIND_JOBS");
  const addUrl = routes.hire.workplace.letters.add;

  const loadCountries = () => {
    Service.listCountries(urlSearch)
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          setCountries(res.data);
        } else {
          setCountries([]);
        }
      })
      .catch(err => {
        setCountries([]);
      });
  };

  const loadCities = () => {
    Service.listCities(urlSearch)
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          setCities(res.data);
        } else {
          setCities([]);
        }
      })
      .catch(err => {
        setCities([]);
      });
  };

  const loadJobRoles = () => {
    Service.listJobRoles(urlSearch)
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          setJobRoles(res.data);
        } else {
          setJobRoles([]);
        }
      })
      .catch(err => {
        setJobRoles([]);
      });
  };

  const loadSpecialties = () => {
    Service.listSpecialties(urlSearch)
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          setSpecialties(res.data);
        } else {
          setSpecialties([]);
        }
      })
      .catch(err => {
        setSpecialties([]);
      });
  };

  const loadIndustries = () => {
    Service.listIndustries(urlSearch)
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          setIndustries(res.data);
        } else {
          setIndustries([]);
        }
      })
      .catch(err => {
        setIndustries([]);
      });
  };

  const loadCareerLevels = () => {
    Service.listCareerLevels(urlSearch)
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          setCareerLevels(res.data);
        } else {
          setCareerLevels([]);
        }
      })
      .catch(err => {
        setCareerLevels([]);
      });
  };

  const loadEmploymentTypes = () => {
    Service.listEmploymentTypes(urlSearch)
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          setEmploymentTypes(res.data);
        } else {
          setEmploymentTypes([]);
        }
      })
      .catch(err => {
        setEmploymentTypes([]);
      });
  };

  const loadGenders = () => {
    Service.listGenders(urlSearch)
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          setGenders(res.data);
        } else {
          setGenders([]);
        }
      })
      .catch(err => {
        setGenders([]);
      });
  };

  const loadCompanyTypes = () => {
    Service.listCompanyTypes(urlSearch)
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          setCompanyTypes(res.data);
        } else {
          setCompanyTypes([]);
        }
      })
      .catch(err => {
        setCompanyTypes([]);
      });
  };

  const loadCompanyNames = () => {
    Service.listCompanyNames(urlSearch)
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          setCompanyNames(res.data);
        } else {
          setCompanyNames([]);
        }
      })
      .catch(err => {
        setCompanyNames([]);
      });
  };

  const loadDateModified = () => {
    Service.listDateModified(urlSearch)
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          setDateModified(res.data);
        } else {
          setDateModified([]);
        }
      })
      .catch(err => {
        setDateModified([]);
      });
  };

  const loadData = () => {
    setLoading(true);
    setAlert({});
    Service.list(urlSearch)
      .then(res => {
        if (res.result === RESULT.SUCCESS) {
          setItems(res.data);
        } else {
          setItems([]);
          toast.error(res.message);
        }
        setLoading(false);
      })
      .catch(err => {
        setItems([]);
        toast.error(t("COMMON.ERROR.UNKNOWN_SERVER_ERROR"));
        setLoading(false);
      });
  };

  const handleFilterChange = filter => {
    history.push(`${routes.work.findJobs.findJobs.main}${getQueryString(filter, true)}`);
  };

  useEffect(e => {
    scroll.scrollToTop({
      duration: EFFECT.TRANSITION_TIME,
    });
  }, []);

  useMemo(e => {
    loadCountries();
    loadCities();
    loadJobRoles();
    loadSpecialties();
    loadIndustries();
    loadCareerLevels();
    loadEmploymentTypes();
    loadGenders();
    loadCompanyTypes();
    loadCompanyNames();
    loadDateModified();
    loadData();
  }, [history.location.search]);
  
  const payload = () => (
    <Fragment>
      <Helmet>
        <title>{pageTitle} - {t("SITE_NAME")}</title>
      </Helmet>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>{t("NAVBAR.WORK.FIND_JOBS.ROOT")}</MDBBreadcrumbItem>
        <MDBBreadcrumbItem active>{pageTitle}</MDBBreadcrumbItem>
      </MDBBreadcrumb>
      <MDBRow>
        {alert.show && <MDBCol md="12">
          <TransitionGroup>
            <CSSTransition in={alert.show} classNames="fade-transition" timeout={EFFECT.TRANSITION_TIME} unmountOnExit appear>
              <MDBAlert color={alert.color} dismiss onClosed={() => setAlert({})}>{alert.message}</MDBAlert>
            </CSSTransition>
          </TransitionGroup>
        </MDBCol>}
        <MDBCol md="4">
          <Filter countries={countries} cities={cities} jobRoles={jobRoles} specialties={specialties} industries={industries} careerLevels={careerLevels} employmentTypes={employmentTypes} genders={genders} companyTypes={companyTypes} companyNames={companyNames} dateModified={dateModified} filter={filter} onChangeFilter={handleFilterChange} />
        </MDBCol>
        <MDBCol md="8">
          <TransitionGroup>
            <CSSTransition
              key={"CSSTransition"}
              timeout={{enter: EFFECT.TRANSITION_TIME, exit: 0}}
              classNames="fade-transition"
            >
              <div>
                {!!loading && <Loading style={{height: LAYOUT.LISTVIEW_HEIGHT}}/>}
                {!loading && !items.length && <ErrorNoData/>}
                {!loading && !!items.length && <Fragment>
                  <ListView items={items} detailLink={addUrl} />
                </Fragment>}
              </div>
            </CSSTransition>
          </TransitionGroup>
        </MDBCol>
      </MDBRow>
    </Fragment>
  );

  return payload();
};
