import { defineRelations } from "drizzle-orm";
import { UserTable } from "./user";
import { UserResumeTable } from "./userResume";
import { UserNotificationSettingsTable } from "./userNotificationSettings";
import { OrganizationUserSettingsTable } from "./organizationUserSettings";
import { OrganizationTable } from "./organization";
import { JobListingTable } from "./jobListing";
import { JobListingApplicationTable } from "./jobListingApplication";

export const relations = defineRelations(
  {
    users: UserTable,
    userNotificationSettings: UserNotificationSettingsTable,
    userResume: UserResumeTable,
    organizations: OrganizationTable,
    organizationUserSettings: OrganizationUserSettingsTable,
    jobListings: JobListingTable,
    jobListingApplications: JobListingApplicationTable,
  },
  (r) => ({
    users: {
      resume: r.one.userResume({
        from: r.users.id,
        to: r.userResume.userId,
      }),

      notificationSettings: r.one.userNotificationSettings({
        from: r.users.id,
        to: r.userNotificationSettings.userId,
      }),

      organizationUserSettings: r.many.organizationUserSettings(),
    },
    userNotificationSettings: {
      user: r.one.users({
        from: r.userNotificationSettings.userId,
        to: r.users.id,
      }),
    },
    userResume: {
      user: r.one.users({
        from: r.userResume.userId,
        to: r.users.id,
      }),
    },
    organizations: {
      jobListings: r.many.jobListings(),
      organizationUserSettings: r.many.organizationUserSettings(),
    },
    organizationUserSettings: {
      user: r.one.users({
        from: r.organizationUserSettings.userId,
        to: r.users.id,
      }),

      organization: r.one.organizations({
        from: r.organizationUserSettings.organizationId,
        to: r.organizations.id,
      }),
    },
    jobListings: {
      organization: r.one.organizations({
        from: r.jobListings.organizationId,
        to: r.organizations.id,
      }),

      applications: r.many.jobListingApplications(),
    },
    jobListingApplications: {
      jobListing: r.one.jobListings({
        from: r.jobListingApplications.jobListingId,
        to: r.jobListings.id,
      }),

      user: r.one.users({
        from: r.jobListingApplications.userId,
        to: r.users.id,
      }),
    },
  }),
);
