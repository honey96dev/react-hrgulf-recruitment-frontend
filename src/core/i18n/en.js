export default {
  NAME: "English",
  CODE: "en",
  DIRECTION: "ltr",
  SITE_NAME: "Recruitment gate",
  COMMON: {
    FIELDS: {
      USER: {
        EMAIL: "Email",
        USERNAME: "Username",
        PASSWORD: "Password",
        PASSWORD2: "Confirm Password",
        FIRST_NAME: "First Name",
        FATHER_NAME: "Father's Name",
        LAST_NAME: "Last Name",
        COUNTRY_CODE: "Country Code",
        PHONE: "Phone Number",
        WEBSITE: "Website",
        NATIONALITY: "Nationality",
        LOCATION: "Location",
        COUNTRY: "Country",
        RESIDENCE_COUNTRY: "Residence Country",
        CITY: "City",
        BIRTHDAY: "Birthday",
        GENDER: "Gender",
        REMEMBER_ME: "Remember Me",
        CURRENT_PASSWORD: "Current Password",
        NEW_PASSWORD: "New Password",
        // CONFIRM_PASSWORD: "Confirm Password",
      },
      AVATAR: {
        AVATAR: "Avatar",
        SCALE: "Scale",
        BORDER_RADIUS: "Border Radius",
      },
      JOB: {
        TITLE: "Job Title",
        LOCATION: "Job Location",
      },
      MIN: "Min",
      MAX: "Max",
    },
    BUTTON: {
      HOME: "Home",
      YES: "Yes",
      NO: "No",
      OK: "OK",
      SEND: "Send",
      BACK: "Back",
      SAVE: "Save",
      DELETE: "Delete",
      CLEAR: "Clear",
      SEARCH: "Search",
      SUBSCRIBE: "Subscribe",
      JOIN: "Join",
      JOIN_US: "Join Us",
      DETAILS: "Details",
      CHANGE: "Change",
      ADD: "Add",
      ADD_NEW_ITEM: "Add New Item",
      EDIT: "Edit",
      NEW: "New",
      CANCEL: "Cancel",
      FIRST: "First",
      LAST: "Last",
      READ_MORE: "Read more",
      MODIFY: "Modify",
      SUBMIT: "Submit",
      DELIVERY: "Delivery",
      ADMIN_PAGE: "Admin Portal",
      CHOOSE_FILE: "Choose File",
      SELECT: "Select",
      NEXT: "Next",
      ACTIVATE: "Activate",
      DEACTIVATE: "Deactivate",
      SWITCH_TO_WORK: "Job seeking?",
      SWITCH_TO_HIRE: "Hiring?",
    },
    VALIDATION: {
      REQUIRED: "{{field}} is required",
      INVALID: "{{field}} is invalid",
      MIN: "{{field}} minimum value is {{value}}",
      MAX: "{{field}} maximum value is {{value}}",
      MIN_LENGTH: "{{field}} minimum length is {{length}}",
      MAX_LENGTH: "{{field}} maximum length is {{length}}",
      MISMATCH: "Make sure same to {{field}}",
      GREATER_THAN: "Make sure greater than {{field}} field",
    },
    QUESTION: {
      DELETE: "Do you want to delete \"{{item}}\"?",
      ACTIVATE: "Do you want to activate \"{{item}}\"?",
      DEACTIVATE: "Do you want to deactivate \"{{item}}\"?",
    },
    ERROR: {
      SORRY: "Sorry",
      UNKNOWN_SERVER_ERROR: "Unknown server error",
      NO_DATA: "There is no data",
      ERROR_404: "Ops, Page not found",
    },
    GENDER: {
      MALE: "Male",
      FEMALE: "Female",
      UNDEFINED: "Not Specified",
    },
    LANGUAGE: {
      LANGUAGE: "Language",
      ENGLISH: "English",
      ARABIC: "العربية",
    },
    FILE_UPLOAD: {
      DEFAULT: "Drag and drop a file here or click",
      REPLACE: "Drag and drop or click to replace",
      REMOVE: "Remove",
      ERROR: "Oops, something wrong happened",
      ERROR_FILESIZE: "The file size is too big ({{max}} max)",
      ERROR_FILEEXTENSION: "The file is not allowed ({{extensions}} only)",
      ERROR_IMAGEFORMAT: "The image format is not allowed ({{format}} only)",
      ERROR_MAXHEIGHT: "The image height is too big ({{max}}px max)",
      ERROR_MINHEIGHT: "The image height is too small ({{min}}px min)",
      ERROR_MAXWIDTH: "The image width is too big ({{max}}px max)",
      ERROR_MINWIDTH: "The image width is too small ({{min}}px min)",
    },
    COMPLETE: {
      COMPLETED: "Completed",
      NOT_COMPLETED: "Not completed",
    },
    GCC_COUNTRIES: {
      BAHRAIN: "Bahrain",
      KUWAIT: "Kuwait",
      OMAN: "Oman",
      QATAR: "Qatar",
      SAUDI_ARABIA: "Saudi Arabia",
      UAE: "UAE",
    },
    ACCOUNT_TYPE: {
      HIRE: "Hire",
      WORK: "Work",
    },
    COMPANY: {
      SIZE: {
        1: "1-9 Employees",
        10: "10-49 Employees",
        50: "50-99 Employees",
        100: "100-499 Employees",
        500: "500 Employees or more",
      },
      TYPE: {
        PUBLIC: "Employer (Public Sector)",
        PRIVATE: "Employer (Public Sector)",
        NON_PROFIT: "Non-Profit Organization",
        AGENCY: "Recruitment Agency",
      },
    },
    CARDINALS: {
      6: "6",
      20: "20",
    },
    SCOPE: {
      ALL: "All",
    },
    SEARCH: {
      KEYWORD: "Keyword",
    },
    AUTH: {
      SIGN_IN: "Login",
      SIGN_UP: "Register",
      SIGN_OUT: "Logout",
      SIGN_IN_FACEBOOK: "Login with Facebook",
      SIGN_IN_GOOGLE: "Login with Google",
      SIGN_UP_FACEBOOK: "Register with Facebook",
      SIGN_UP_GOOGLE: "Register with Google",
      FORGOT_PASSWORD: "Forgot password?",
      ALREADY_REGISTERED: "Already registered?",
      NOT_REGISTERED: "Not registered?",
      RESET_PASSWORD: "Reset Password",
      ERROR: {
        ACCOUNT_IS_INVALID: "Your account is invalid. Try with another one.",
        FACEBOOK_AUTHENTICATION_IS_FAILED: "Facebook Authentication is failed.",
        GOOGLE_AUTHENTICATION_IS_FAILED: "Google Authentication is failed.",
      },
    },
    QUESTIONNAIRE: {
      QUESTION_TYPE: {
        YES_NO: "Yes/No",
        SELECT: "Select",
        TEXT: "Text",
      },
    },
    VALUES: {
      UNDEFINED: "Undefined",
      SELECT_ONE: "Select One",
    },
    JOB_STATUS: {
      ACTIVE: "Active",
      INACTIVE: "Inactive",
    },
  },
  NAVBAR: {
    HOME: "Home",
    //HIRE===========================================
    HIRE: {
      WORKPLACE: {
        ROOT: "Workplace",
        DASHBOARD: "Dashboard",
        QUESTIONNAIRE: "Questionnaire",
        LETTERS: "Letters",
        MY_COMPANY_PROFILES: "My Company Profiles",
        EMPLOYER_TEST: "Employer test",
      },
      MY_JOBS: {
        ROOT: "My Jobs",
        POST_A_JOB: "Post a Job",
        MY_JOBS: "My Jobs",
        DRAFT_JOBS: "Draft Jobs",
      },
      CV_SERVICES: {
        ROOT: "CV Services",
        CV_SEARCH: "CV Search",
        MY_SAVED_SEARCHES: "My Saved Searches",
        CV_FOLDERS: "CV Folders",
      },
      HR_COMMUNITY: {
        ROOT: "HR Community",
        NEWS_FEED: "News Feed",
        MY_QUESTIONS: "My Questions",
        MY_ANSWERS: "My Answers",
        MY_NETWORK: "My Network",
        FIND_PEOPLE: "Find People",
        MY_RANK: "My Rank",
      },
      CONTACT_US: {
        ROOT: "Contact Us",
        MAIN: "Contact Us",
      },
      ACCOUNT: {
        MY_ACCOUNT: "My Account",
      },
    },
    //WORK===========================================
    WORK: {
      FIND_JOBS: {
        ROOT: "Find Jobs",
        FIND_JOBS: "Find Jobs",
        RECOMMENDED_JOBS: "Recommended Jobs",
        SAVED_JOBS: "Saved Jobs",
        MY_JOB_ALERTS: "My Job Alerts",
        ADVANCED_SEARCH: "Advanced Search",
        BROWSE_JOBS: "Browse Jobs",
        JOBS_BY_ROLE: "Jobs by Role",
        JOBS_BY_LOCATION: "Jobs by Location",
        JOBS_BY_SECTOR: "Jobs by Sector",
        JOBS_BY_COMPANIES: "Jobs by Companies",
        EXECUTIVE_JOBS: "Executive Jobs",
        SALARIES: "Salaries",
      },
      MY_CV: {
        ROOT: "My CV",
        MY_CV: "My CV",
        MY_OTHER_PROFILES: "My Other Profiles",
        COVER_LETTERS: "Cover Letters",
        BLOG: "Blog",
      },
      MY_APPLICATIONS: {
        ROOT: "My Applications",
        MAIN: "My Applications",
      },
      MY_VISIBILITY: {
        ROOT: "My Visibility",
        MY_VISIBILITY: "My Visibility",
        WHO_VIEWED_MY: "Who Viewed My",
      },
      CV_SERVICES: {
        ROOT: "CV Services",
        PROFESSIONAL_CV: "Professional CV",
        VISUAL_CV_TEMPLATES: "Visual CV Templates",
        COVER_LETTER_WRITING: "Cover Letter Writing",
        CV_EVALUATION: "CV Evaluation",
      },
      ACCOUNT: {
        MY_ACCOUNT: "My Account",
      },
    },
  },
  HIRE: {
    PAGE_TITLE: "Employers",
    ACCOUNT: {
      FIELDS: {
        NAME: "Company Name",
        LOCATION: "Company Location",
        SIZE: "Company Size",
        SECTOR_N_INDUSTRY: "Company Industry",
        SECTOR: "Sector",
        INDUSTRY: "Industry",
        TYPE: "Company Type",
        HIDE_LOCATION: "Hide Location",
        WEBSITE: "Website",
        TAX_REG_NUMBER: "Tax Registration Number",
      },
    },
    WORKPLACE: {
      QUESTIONNAIRE: {
        FIELDS: {
          NAME: "Name",
          DESCRIPTION: "Description",
          FILTER_BY_SCORE: "Filter applicants by their score",
          MIN_SCORE: "Minimum Score",
          QUESTION: "Question",
          TYPE: "Type",
          REQUIRED: "This question is mandatory",
          REQUIRED2: "Mandatory",
          ANSWERS: "Answers",
          HAS_CORRECT_ANSWER: "Has correct answer?",
          CORRECT_ANSWER: "Correct Answer",
        },
        ALL: {
          NEW_ITEM_DESCRIPTION: "Please click this card to add a new questionnaire."
        },
        ADD: {
          ADD_QUESTIONNAIRE: "Add Questionnaire",
          EDIT_QUESTIONNAIRE: "Edit Questionnaire",
        },
        QUESTIONS: {
          QUESTIONS: "Questions",
          ANSWERS_PLACEHOLDER: "Enter answers by splitting with comma",
          ADD_QUESTION: "Add Question",
          EDIT_QUESTION: "Edit Question",
        },
      },
      LETTERS: {
        FIELDS: {
          TYPE: "Letter Type",
          NAME: "Letter Name",
          SUBJECT: "Letter Subject",
          MESSAGE: "Message",
          ATTACHMENT: "Attachment",
        },
        TYPE: {
          GENERIC: "Generic",
          INTERVIEW: "Interview",
          FOLLOWUP: "Followup",
          ACCEPTANCE: "Acceptance",
          REJECTION: "Rejection",
          ON_BOARDING: "On Boarding",
        },
        ALL: {
          NEW_ITEM_DESCRIPTION: "Please click this card to add a new letter."
        },
        ADD: {
          ADD_LETTER: "Add Letter",
          EDIT_LETTER: "Edit Letter",
        },
      },
      MY_COMPANY_PROFILES: {
        FIELDS: {
          SALARY: {
            UNIT: "Unit",
            MIN: "Minimum",
            MAX: "Maximum",
          },
          ABOUT: "About",
          VISION: "Vision",
          MISSION: "Mission",
        },
        SALARY: "Salary",
        ABOUT: "About",
        VISION: "Vision",
        MISSION: "Mission",
        COVER_PHOTO: "Cover Photo",
      },
      EMPLOYER_TEST: {
        FIELD: {

        },
        STEP1: "Send Test Invitation",
        STEP2: "Invitation Status",
        STEP3: "Test Result",
      },
    },
    MY_JOBS: {
      POST_A_JOB: {
        STEPS: {
          JOB_INFORMATION: "Job Information",
          CANDIDATE_REQUIREMENTS: "Candidate Requirements",
          ADD_SPECIALTIES: "Add Specialties",
          ADD_QUESTIONNAIRE: "Add Questionnaire",
        },
        CANDIDATE_TYPE: {
          PROFESSIONAL: "Professional (Lawyer, Engineer, Marketing associate, Sales manager, Accountant, etc.)",
          SKILLED: "Skilled-trade Worker (Mechanic, Welder, Driver, Plumber, Security Staff, etc.)",
        },
        FIELDS: {
          JOB_INFORMATION: {
            CANDIDATE_TYPE: "Candidate Type",
            TITLE: "Job Title",
            ROLE: "Job Role",
            SUBROLE: "Job Subrole",
            SECTOR_N_INDUSTRY: "Company Sector & Industry",
            SECTOR: "Company Sector",
            INDUSTRY: "Company Industry",
            LOCATION: "Job Location",
            COUNTRY: "Country",
            CITY: "City",
            EMPLOYMENT_TYPE: "Employment Type",
            SALARY_RANGE: "Monthly Salary Range",
            VACANCIES_COUNT: "Number of Vacancies",
            DESCRIPTION: "Job Description",
            SKILLS: "Desired Skills",
          },
          CANDIDATE_REQUIREMENTS: {
            EXPERIENCE: "Experience",
            CAREER_LEVEL: "Career Level",
            YEAR_OF_EXPERIENCE: "Year of Experience",
            EDUCATION: "Education",
            MAJOR: "Major",
            DEGREE: "Degree",
            PERSONAL_INFORMATION: "Personal Information",
            LOCATION: "Residence Location",
            NATIONALITY: "Nationality",
            GENDER: "Gender",
            AGE: "Age",
          },
          ADD_SPECIALTIES: {
            SUBHEADING: "Reach your target audience by tagging your Job Posting with professional specialties.",
            SPECIALTIES: "Please add one specialties at least",
          },
          ADD_QUESTIONNAIRE: {
            SUBHEADING: "Screen your candidates easily by adding any questions you may have. They will have the chance to provide their answers when they apply.",
            QUESTIONNAIRE: "Add questions to learn about candidates",
          },
        },
        ADD_QUESTIONNAIRE: {
          NO_QUESTIONNAIRE: "I don't want to ask any questions",
          ADD_QUESTIONNAIRE: "Create your questions",
        },
        BUTTON: {
          POST: "Post Job",
          EDIT: "Edit Job",
        },
        MESSAGE: {
          SUCCESSFULLY_POSTED: "Your job is successfully posted",
          SUCCESSFULLY_EDITED: "Your job is successfully edited",
        },
      },
      MY_JOBS: {
        FIELDS: {
          TYPE: "Active Status",
        },
        EDIT_JOB: {
          PAGE_TITLE: "Edit Job",
        },
      },
    },
    MY_ACCOUNT: {
      MAIN: {
        INFORMATION: {
          HEADING: "Account Information",
          PASSWORD: "Password",
          PASSWORD_DESCRIPTION: "Change your account password",
          PERSONAL_PROFILE: "Personal Profile",
          PERSONAL_PROFILE_DESCRIPTION: "Update your personal information and your contact details.",
          COMPANY_PROFILE: "Company Profile",
          COMPANY_PROFILE_DESCRIPTION: "Update your company profile and your company address details",
          EMAIL_NOTIFICATIONS: "Emails Notifications and Newsletter Subscriptions",
          EMAIL_NOTIFICATIONS_DESCRIPTION: "Modify your email subscription settings.",
          EMAIL_SPECIALTIES: "Email Notifications Related to Specialties",
          EMAIL_SPECIALTIES_DESCRIPTION: "Control when we send you email notifications related to your activities on Specialties.",
        },
        PRIVACY_SETTINGS: {
          HEADING: "Privacy Settings",
          CONTROL_SHARE: "Control what you share with job seekers",
        },
        MANAGEMENT: {
          HEADING: "Management",
          USER_MANAGEMENT: "User Management",
          USER_MANAGEMENT_DESCRIPTION: "Create user accounts for other members of your organization and allow them to post jobs and search CVs.",
          CV_TAGS: "CV Tags Management",
          CV_TAGS_DESCRIPTION: "Create, edit, and delete tags that you can use to manage your applicants’ CVs.",
        },
      },
      PASSWORD: {
        PAGE_TITLE: "Change Password",
      },
      PERSONAL_PROFILE: {
        PAGE_TITLE: "Personal Profile",
        FIELDS: {
          PERSONAL_INFORMATION: "Personal Information",
          CONTACT_INFORMATION: "Contact Information",
        },
      },
      COMPANY_PROFILE: {
        PAGE_TITLE: "Company Profile",
        FIELDS: {

        },
      },
      EMAIL_NOTIFICATIONS: {
        PAGE_TITLE: "Subscription Settings",
        FIELDS: {

        },
      },
    },
  },
  WORK: {
    PAGE_TITLE: "Job Seekers",
    ACCOUNT: {
      FIELDS: {
        JOB_ROLE: "Job Role",
        CV: "CV",
        JOB_TITLE: "Job Title",
        COMPANY_NAME: "Company Name",
        START_DATE: "Start Date",
        END_DATE: "End Date",
        IS_PRESENT: "I still work here",
        JOB_LOCATION: "Job Location",
        COMPANY_SECTOR_N_INDUSTRY: "Company Sector",
        COMPANY_SECTOR: "Sector",
        COMPANY_INDUSTRY: "Industry",
        JOB_VISA_STATUS: "Visa Status",
        CAREER_LEVEL: "Career Level",
        DEGREE: "Degree",
        UNIVERSITY: "University or Institution",
        MAJOR: "Field of Study(Major)",
        GRADUATED_DATE: "Graduated Date",
        GRADE: "Grade",
      },
    },
    MY_ACCOUNT: {
      ROOT: "Account",
      MINIFIED_PROFILE: {
        PAGE_TITLE: "Minified Profile",
        STEPS: {
          POSITION: "Your Position",
          JOB_KIND: "Job Kind",
          EDUCATION: "Education",
          CONTACT: "Contact",
        },
      },
    },
  }
};
