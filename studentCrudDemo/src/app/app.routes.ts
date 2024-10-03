import { Routes } from '@angular/router';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { DeleteStudentComponent } from './pages/delete-student/delete-student.component';

export const routes: Routes = [
    {
        path: 'student-list',
        component: StudentListComponent
    },
    {
        path: 'add-student',
        component: AddStudentComponent
    },
    {
        path: 'student-details',
        component: StudentDetailsComponent
    }, {
        path: 'delete-student',
        component: DeleteStudentComponent
    },
];
