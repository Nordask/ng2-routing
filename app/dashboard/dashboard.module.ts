import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardUserDetailsComponent } from "./dashboard-user-details.component";
import { DashboardUsersComponent } from "./dashboard-users.component";
import { DashboardUsersHomeComponent } from "./dashboard-users-home.component";
import { dashboardRouting } from "./dashboard.routing";
import { UserService } from "../shared/services/user.service";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [ CommonModule,
               dashboardRouting,
               FormsModule ],
    declarations: [ DashboardComponent,
                    DashboardUserDetailsComponent,
                    DashboardUsersComponent,
                    DashboardUsersHomeComponent ],
    providers: [UserService]
})
export class DashboardModule {}