import fetch from "apis/fetch";
import {POST} from "apis/constants";
import apis from "core/apis";

export default {
  listCountries: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.work.findJobs.findJobs.listCountries, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  listCities: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.work.findJobs.findJobs.listCities, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  listJobRoles: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.work.findJobs.findJobs.listJobRoles, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  listSpecialties: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.work.findJobs.findJobs.listSpecialties, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  listIndustries: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.work.findJobs.findJobs.listIndustries, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  listCareerLevels: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.work.findJobs.findJobs.listCareerLevels, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  listEmploymentTypes: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.work.findJobs.findJobs.listEmploymentTypes, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  listGenders: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.work.findJobs.findJobs.listGenders, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  listCompanyTypes: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.work.findJobs.findJobs.listCompanyTypes, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  listCompanyNames: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.work.findJobs.findJobs.listCompanyNames, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  listDateModified: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.work.findJobs.findJobs.listDateModified, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },

  list: (params) => {
    return new Promise((resolve, reject) => {
      fetch(POST, apis.work.findJobs.findJobs.list, params)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  },
};
