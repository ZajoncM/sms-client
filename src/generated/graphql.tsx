import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Attendance = {
  __typename?: 'Attendance';
  id: Scalars['ID'];
  lesson: Lesson;
  student: Student;
  type: AttendanceTypeEnum;
};

export enum AttendanceTypeEnum {
  Absent = 'ABSENT',
  Present = 'PRESENT'
}

export type Course = {
  __typename?: 'Course';
  exams: Array<Exam>;
  group: Group;
  id: Scalars['ID'];
  lessons: Array<Lesson>;
  name: Scalars['String'];
  teacher?: Maybe<Teacher>;
};

export type CreateAttendanceInput = {
  lessonId: Scalars['String'];
  studentId: Scalars['String'];
  type?: InputMaybe<AttendanceTypeEnum>;
};

export type CreateCourseInput = {
  groupId: Scalars['String'];
  name: Scalars['String'];
  studentId?: InputMaybe<Scalars['String']>;
  teacherId?: InputMaybe<Scalars['String']>;
};

export type CreateExamInput = {
  courseId: Scalars['String'];
  name: Scalars['String'];
  weight: Scalars['Int'];
};

export type CreateGradeInput = {
  examId: Scalars['String'];
  studentId: Scalars['String'];
  value: Scalars['Int'];
};

export type CreateGroupInput = {
  educatorId: Scalars['String'];
  name: Scalars['String'];
  semester: Scalars['Int'];
  studentIds: Array<Scalars['String']>;
};

export type CreateLessonInput = {
  courseId: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  role: UserRoleEnum;
};

export type Exam = {
  __typename?: 'Exam';
  course: Scalars['String'];
  grades: Array<Grade>;
  id: Scalars['ID'];
  name: Scalars['String'];
  weight: Scalars['Int'];
};

export type Grade = {
  __typename?: 'Grade';
  exam: Exam;
  id: Scalars['ID'];
  student: Student;
  value: Scalars['Int'];
};

export type Group = {
  __typename?: 'Group';
  courses: Array<Course>;
  educator?: Maybe<Teacher>;
  id: Scalars['ID'];
  name: Scalars['String'];
  semester: Scalars['Int'];
  students: Array<Student>;
};

export type Lesson = {
  __typename?: 'Lesson';
  attendances: Array<Attendance>;
  course: Course;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAttendance: Attendance;
  createCourse: Course;
  createExam: Exam;
  createGrade: Grade;
  createGroup: Group;
  createLesson: Lesson;
  createUser: User;
  removeAttendance: Attendance;
  removeCourse: Course;
  removeExam: Exam;
  removeGrade: Grade;
  removeGroup: Group;
  removeLesson: Lesson;
  removeUser: User;
  updateAttendance: Attendance;
  updateCourse: Course;
  updateExam: Exam;
  updateGrade: Grade;
  updateGroup: Group;
  updateLesson: Lesson;
  updateUser: User;
};


export type MutationCreateAttendanceArgs = {
  createAttendanceInput: CreateAttendanceInput;
};


export type MutationCreateCourseArgs = {
  createCourseInput: CreateCourseInput;
};


export type MutationCreateExamArgs = {
  createExamInput: CreateExamInput;
};


export type MutationCreateGradeArgs = {
  createGradeInput: CreateGradeInput;
};


export type MutationCreateGroupArgs = {
  createGroupInput: CreateGroupInput;
};


export type MutationCreateLessonArgs = {
  createLessonInput: CreateLessonInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveAttendanceArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveCourseArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveExamArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveGradeArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveGroupArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveLessonArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateAttendanceArgs = {
  updateAttendanceInput: UpdateAttendanceInput;
};


export type MutationUpdateCourseArgs = {
  id: Scalars['Int'];
  updateCourseInput: CreateCourseInput;
};


export type MutationUpdateExamArgs = {
  updateExamInput: UpdateExamInput;
};


export type MutationUpdateGradeArgs = {
  updateGradeInput: UpdateGradeInput;
};


export type MutationUpdateGroupArgs = {
  updateGroupInput: UpdateGroupInput;
};


export type MutationUpdateLessonArgs = {
  updateLessonInput: UpdateLessonInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Parent = {
  __typename?: 'Parent';
  children: Array<Student>;
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  attendance: Attendance;
  attendances: Array<Attendance>;
  course: Course;
  courses: Array<Course>;
  currentUser: User;
  exam: Exam;
  exams: Array<Exam>;
  grade: Grade;
  grades: Array<Grade>;
  group: Group;
  groups: Array<Group>;
  lesson: Lesson;
  lessons: Array<Lesson>;
  parent: Parent;
  user: User;
  users: Array<User>;
};


export type QueryAttendanceArgs = {
  id: Scalars['Int'];
};


export type QueryAttendancesArgs = {
  attendanceDto?: InputMaybe<UpdateAttendanceInput>;
};


export type QueryCourseArgs = {
  id: Scalars['Int'];
};


export type QueryCoursesArgs = {
  updateCourseInput?: InputMaybe<UpdateCourseInput>;
};


export type QueryExamArgs = {
  id: Scalars['Int'];
};


export type QueryExamsArgs = {
  examDto?: InputMaybe<UpdateExamInput>;
};


export type QueryGradeArgs = {
  id: Scalars['Int'];
};


export type QueryGradesArgs = {
  gradeDto?: InputMaybe<UpdateGradeInput>;
};


export type QueryGroupArgs = {
  id: Scalars['Int'];
};


export type QueryLessonArgs = {
  id: Scalars['Int'];
};


export type QueryLessonsArgs = {
  lessonDto?: InputMaybe<UpdateLessonInput>;
};


export type QueryUserArgs = {
  user: UpdateUserInput;
};


export type QueryUsersArgs = {
  user?: InputMaybe<UpdateUserInput>;
};

export type Student = {
  __typename?: 'Student';
  attendances?: Maybe<Array<Attendance>>;
  grades?: Maybe<Array<Grade>>;
  group: Group;
  id: Scalars['ID'];
  user: User;
};

export type Teacher = {
  __typename?: 'Teacher';
  courses: Array<Course>;
  group: Group;
  id: Scalars['ID'];
  user: User;
};

export type UpdateAttendanceInput = {
  id?: InputMaybe<Scalars['Int']>;
  lessonId?: InputMaybe<Scalars['String']>;
  studentId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AttendanceTypeEnum>;
};

export type UpdateCourseInput = {
  groupId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  studentId?: InputMaybe<Scalars['String']>;
  teacherId?: InputMaybe<Scalars['String']>;
};

export type UpdateExamInput = {
  courseId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Int']>;
};

export type UpdateGradeInput = {
  examId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  studentId?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type UpdateGroupInput = {
  educatorId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  semester?: InputMaybe<Scalars['Int']>;
  studentIds?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateLessonInput = {
  courseId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserRoleEnum>;
};

export type User = {
  __typename?: 'User';
  courses: Array<Course>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  parent?: Maybe<Parent>;
  password: Scalars['String'];
  role: UserRoleEnum;
  student?: Maybe<Student>;
  teacher?: Maybe<Teacher>;
};

export enum UserRoleEnum {
  Admin = 'ADMIN',
  Parent = 'PARENT',
  Student = 'STUDENT',
  Teacher = 'TEACHER'
}

export type AttendanceEntity = {
  id: Scalars['ID'];
  lesson: LessonEntity;
  student: StudentEntity;
  type?: InputMaybe<AttendanceTypeEnum>;
};

export type CourseEntity = {
  exams: Array<ExamEntity>;
  group: GroupEntity;
  id: Scalars['ID'];
  lessons: Array<LessonEntity>;
  name: Scalars['String'];
  teacher?: InputMaybe<TeacherEntity>;
};

export type ExamEntity = {
  course: Scalars['String'];
  grades: Array<GradeEntity>;
  id: Scalars['ID'];
  name: Scalars['String'];
  weight: Scalars['Int'];
};

export type GradeEntity = {
  exam: ExamEntity;
  id: Scalars['ID'];
  student: StudentEntity;
  value: Scalars['Int'];
};

export type GroupEntity = {
  courses: Array<CourseEntity>;
  educator?: InputMaybe<TeacherEntity>;
  id: Scalars['ID'];
  name: Scalars['String'];
  semester: Scalars['Int'];
  students: Array<StudentEntity>;
};

export type LessonEntity = {
  attendances: Array<AttendanceEntity>;
  course: CourseEntity;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ParentEntity = {
  children: Array<StudentEntity>;
  id: Scalars['ID'];
};

export type StudentEntity = {
  attendances?: InputMaybe<Array<AttendanceEntity>>;
  grades?: InputMaybe<Array<GradeEntity>>;
  group: GroupEntity;
  id: Scalars['ID'];
  user: UserEntity;
};

export type TeacherEntity = {
  courses: Array<CourseEntity>;
  group: GroupEntity;
  id: Scalars['ID'];
  user: UserEntity;
};

export type UserEntity = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  parent?: InputMaybe<ParentEntity>;
  password: Scalars['String'];
  role: UserRoleEnum;
  student?: InputMaybe<StudentEntity>;
  teacher?: InputMaybe<TeacherEntity>;
};

export type CreateGradeMutationVariables = Exact<{
  createGradeInput: CreateGradeInput;
}>;


export type CreateGradeMutation = { __typename?: 'Mutation', createGrade: { __typename?: 'Grade', id: string } };

export type GradesQueryVariables = Exact<{
  gradeDto: UpdateGradeInput;
}>;


export type GradesQuery = { __typename?: 'Query', grades: Array<{ __typename?: 'Grade', id: string, value: number, student: { __typename?: 'Student', id: string } }> };

export type CreateExamMutationVariables = Exact<{
  createExamInput: CreateExamInput;
}>;


export type CreateExamMutation = { __typename?: 'Mutation', createExam: { __typename?: 'Exam', id: string } };

export type UpdateExamMutationVariables = Exact<{
  updateExamInput: UpdateExamInput;
}>;


export type UpdateExamMutation = { __typename?: 'Mutation', updateExam: { __typename?: 'Exam', id: string } };

export type ExamsQueryVariables = Exact<{
  examDto?: InputMaybe<UpdateExamInput>;
}>;


export type ExamsQuery = { __typename?: 'Query', exams: Array<{ __typename?: 'Exam', id: string, name: string, weight: number, grades: Array<{ __typename?: 'Grade', value: number, student: { __typename?: 'Student', id: string } }> }> };

export type ExamFieldsFragment = { __typename?: 'Exam', id: string, name: string, weight: number, grades: Array<{ __typename?: 'Grade', value: number, student: { __typename?: 'Student', id: string } }> };

export type CreateAttendanceMutationVariables = Exact<{
  createAttendanceInput: CreateAttendanceInput;
}>;


export type CreateAttendanceMutation = { __typename?: 'Mutation', createAttendance: { __typename?: 'Attendance', id: string } };

export type AttendancesQueryVariables = Exact<{
  attendanceDto: UpdateAttendanceInput;
}>;


export type AttendancesQuery = { __typename?: 'Query', attendances: Array<{ __typename?: 'Attendance', id: string, type: AttendanceTypeEnum, student: { __typename?: 'Student', id: string } }> };

export type CreateLessonMutationVariables = Exact<{
  createLessonInput: CreateLessonInput;
}>;


export type CreateLessonMutation = { __typename?: 'Mutation', createLesson: { __typename?: 'Lesson', id: string } };

export type UpdateLessonMutationVariables = Exact<{
  updateLessonInput: UpdateLessonInput;
}>;


export type UpdateLessonMutation = { __typename?: 'Mutation', updateLesson: { __typename?: 'Lesson', id: string } };

export type LessonsQueryVariables = Exact<{
  lessonDto?: InputMaybe<UpdateLessonInput>;
}>;


export type LessonsQuery = { __typename?: 'Query', lessons: Array<{ __typename?: 'Lesson', id: string, name: string, description?: string | null, attendances: Array<{ __typename?: 'Attendance', id: string, type: AttendanceTypeEnum, student: { __typename?: 'Student', id: string } }> }> };

export type LessonFieldsFragment = { __typename?: 'Lesson', id: string, name: string, description?: string | null, attendances: Array<{ __typename?: 'Attendance', id: string, type: AttendanceTypeEnum, student: { __typename?: 'Student', id: string } }> };

export type CourseQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type CourseQuery = { __typename?: 'Query', course: { __typename?: 'Course', id: string, name: string, teacher?: { __typename?: 'Teacher', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } } | null, group: { __typename?: 'Group', id: string, name: string, semester: number, students: Array<{ __typename?: 'Student', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null }, attendances?: Array<{ __typename?: 'Attendance', lesson: { __typename?: 'Lesson', id: string } }> | null }> } } };

export type CoursesQueryVariables = Exact<{
  courseDto?: InputMaybe<UpdateCourseInput>;
}>;


export type CoursesQuery = { __typename?: 'Query', courses: Array<{ __typename?: 'Course', id: string, name: string, teacher?: { __typename?: 'Teacher', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } } | null, group: { __typename?: 'Group', id: string, name: string, semester: number, students: Array<{ __typename?: 'Student', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null }, attendances?: Array<{ __typename?: 'Attendance', lesson: { __typename?: 'Lesson', id: string } }> | null }> } }> };

export type ParentQueryVariables = Exact<{ [key: string]: never; }>;


export type ParentQuery = { __typename?: 'Query', parent: { __typename?: 'Parent', id: string, children: Array<{ __typename?: 'Student', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null }, attendances?: Array<{ __typename?: 'Attendance', id: string, type: AttendanceTypeEnum, lesson: { __typename?: 'Lesson', id: string, name: string } }> | null, grades?: Array<{ __typename?: 'Grade', id: string, value: number, exam: { __typename?: 'Exam', id: string, name: string } }> | null }> } };

export type CreateGroupMutationVariables = Exact<{
  createGroupInput: CreateGroupInput;
}>;


export type CreateGroupMutation = { __typename?: 'Mutation', createGroup: { __typename?: 'Group', id: string } };

export type CreateCourseMutationVariables = Exact<{
  createCourseInput: CreateCourseInput;
}>;


export type CreateCourseMutation = { __typename?: 'Mutation', createCourse: { __typename?: 'Course', id: string } };

export type UpdateCourseMutationVariables = Exact<{
  id: Scalars['Int'];
  updateCourseInput: CreateCourseInput;
}>;


export type UpdateCourseMutation = { __typename?: 'Mutation', updateCourse: { __typename?: 'Course', id: string } };

export type RemoveCourseMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveCourseMutation = { __typename?: 'Mutation', removeCourse: { __typename?: 'Course', id: string } };

export type UpdateGroupMutationVariables = Exact<{
  updateGroupInput: UpdateGroupInput;
}>;


export type UpdateGroupMutation = { __typename?: 'Mutation', updateGroup: { __typename?: 'Group', id: string } };

export type GroupQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GroupQuery = { __typename?: 'Query', group: { __typename?: 'Group', id: string, name: string, semester: number, students: Array<{ __typename?: 'Student', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } }>, educator?: { __typename?: 'Teacher', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } } | null, courses: Array<{ __typename?: 'Course', id: string, name: string, teacher?: { __typename?: 'Teacher', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } } | null, group: { __typename?: 'Group', id: string, name: string, semester: number, students: Array<{ __typename?: 'Student', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null }, attendances?: Array<{ __typename?: 'Attendance', lesson: { __typename?: 'Lesson', id: string } }> | null }> } }> } };

export type GroupFieldsFragment = { __typename?: 'Group', id: string, name: string, semester: number, students: Array<{ __typename?: 'Student', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } }>, educator?: { __typename?: 'Teacher', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } } | null, courses: Array<{ __typename?: 'Course', id: string, name: string, teacher?: { __typename?: 'Teacher', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } } | null, group: { __typename?: 'Group', id: string, name: string, semester: number, students: Array<{ __typename?: 'Student', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null }, attendances?: Array<{ __typename?: 'Attendance', lesson: { __typename?: 'Lesson', id: string } }> | null }> } }> };

export type CourseFieldsFragment = { __typename?: 'Course', id: string, name: string, teacher?: { __typename?: 'Teacher', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } } | null, group: { __typename?: 'Group', id: string, name: string, semester: number, students: Array<{ __typename?: 'Student', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null }, attendances?: Array<{ __typename?: 'Attendance', lesson: { __typename?: 'Lesson', id: string } }> | null }> } };

export type RemoveGroupMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveGroupMutation = { __typename?: 'Mutation', removeGroup: { __typename?: 'Group', id: string } };

export type GroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GroupsQuery = { __typename?: 'Query', groups: Array<{ __typename?: 'Group', id: string, name: string, semester: number, students: Array<{ __typename?: 'Student', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } }>, educator?: { __typename?: 'Teacher', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } } | null, courses: Array<{ __typename?: 'Course', id: string, name: string, teacher?: { __typename?: 'Teacher', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } } | null, group: { __typename?: 'Group', id: string, name: string, semester: number, students: Array<{ __typename?: 'Student', id: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null }, attendances?: Array<{ __typename?: 'Attendance', lesson: { __typename?: 'Lesson', id: string } }> | null }> } }> }> };

export type TeachersQueryVariables = Exact<{ [key: string]: never; }>;


export type TeachersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null }> };

export type StudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type StudentsQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, student?: { __typename?: 'Student', id: string } | null, teacher?: { __typename?: 'Teacher', id: string } | null }> };

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } };

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } };

export type UserQueryVariables = Exact<{
  user: UpdateUserInput;
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } };

export type UserFieldsFragment = { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null };

export type RemoveUserMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type RemoveUserMutation = { __typename?: 'Mutation', removeUser: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, courses: Array<{ __typename?: 'Course', id: string, name: string, exams: Array<{ __typename?: 'Exam', id: string, name: string, weight: number, grades: Array<{ __typename?: 'Grade', value: number, student: { __typename?: 'Student', id: string } }> }>, lessons: Array<{ __typename?: 'Lesson', id: string, name: string, description?: string | null, attendances: Array<{ __typename?: 'Attendance', id: string, type: AttendanceTypeEnum, student: { __typename?: 'Student', id: string } }> }> }>, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null } };

export type MeFieldsFragment = { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, role: UserRoleEnum, courses: Array<{ __typename?: 'Course', id: string, name: string, exams: Array<{ __typename?: 'Exam', id: string, name: string, weight: number, grades: Array<{ __typename?: 'Grade', value: number, student: { __typename?: 'Student', id: string } }> }>, lessons: Array<{ __typename?: 'Lesson', id: string, name: string, description?: string | null, attendances: Array<{ __typename?: 'Attendance', id: string, type: AttendanceTypeEnum, student: { __typename?: 'Student', id: string } }> }> }>, teacher?: { __typename?: 'Teacher', id: string } | null, student?: { __typename?: 'Student', id: string } | null };

export type CourseDetailsFieldsFragment = { __typename?: 'Course', id: string, name: string, exams: Array<{ __typename?: 'Exam', id: string, name: string, weight: number, grades: Array<{ __typename?: 'Grade', value: number, student: { __typename?: 'Student', id: string } }> }>, lessons: Array<{ __typename?: 'Lesson', id: string, name: string, description?: string | null, attendances: Array<{ __typename?: 'Attendance', id: string, type: AttendanceTypeEnum, student: { __typename?: 'Student', id: string } }> }> };

export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  id
  email
  firstName
  lastName
  role
  teacher {
    id
  }
  student {
    id
  }
}
    `;
export const CourseFieldsFragmentDoc = gql`
    fragment CourseFields on Course {
  id
  name
  teacher {
    id
    user {
      ...UserFields
    }
  }
  group {
    id
    name
    semester
    students {
      id
      user {
        ...UserFields
      }
      attendances {
        lesson {
          id
        }
      }
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const GroupFieldsFragmentDoc = gql`
    fragment GroupFields on Group {
  id
  name
  semester
  students {
    id
    user {
      ...UserFields
    }
  }
  educator {
    id
    user {
      ...UserFields
    }
  }
  courses {
    ...CourseFields
  }
}
    ${UserFieldsFragmentDoc}
${CourseFieldsFragmentDoc}`;
export const ExamFieldsFragmentDoc = gql`
    fragment ExamFields on Exam {
  id
  name
  weight
  grades {
    value
    student {
      id
    }
  }
}
    `;
export const LessonFieldsFragmentDoc = gql`
    fragment LessonFields on Lesson {
  id
  name
  description
  attendances {
    id
    type
    student {
      id
    }
  }
}
    `;
export const CourseDetailsFieldsFragmentDoc = gql`
    fragment CourseDetailsFields on Course {
  id
  name
  exams {
    ...ExamFields
  }
  lessons {
    ...LessonFields
  }
}
    ${ExamFieldsFragmentDoc}
${LessonFieldsFragmentDoc}`;
export const MeFieldsFragmentDoc = gql`
    fragment MeFields on User {
  ...UserFields
  courses {
    ...CourseDetailsFields
  }
}
    ${UserFieldsFragmentDoc}
${CourseDetailsFieldsFragmentDoc}`;
export const CreateGradeDocument = gql`
    mutation createGrade($createGradeInput: CreateGradeInput!) {
  createGrade(createGradeInput: $createGradeInput) {
    id
  }
}
    `;
export type CreateGradeMutationFn = Apollo.MutationFunction<CreateGradeMutation, CreateGradeMutationVariables>;

/**
 * __useCreateGradeMutation__
 *
 * To run a mutation, you first call `useCreateGradeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGradeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGradeMutation, { data, loading, error }] = useCreateGradeMutation({
 *   variables: {
 *      createGradeInput: // value for 'createGradeInput'
 *   },
 * });
 */
export function useCreateGradeMutation(baseOptions?: Apollo.MutationHookOptions<CreateGradeMutation, CreateGradeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGradeMutation, CreateGradeMutationVariables>(CreateGradeDocument, options);
      }
export type CreateGradeMutationHookResult = ReturnType<typeof useCreateGradeMutation>;
export type CreateGradeMutationResult = Apollo.MutationResult<CreateGradeMutation>;
export type CreateGradeMutationOptions = Apollo.BaseMutationOptions<CreateGradeMutation, CreateGradeMutationVariables>;
export const GradesDocument = gql`
    query grades($gradeDto: UpdateGradeInput!) {
  grades(gradeDto: $gradeDto) {
    id
    value
    student {
      id
    }
  }
}
    `;

/**
 * __useGradesQuery__
 *
 * To run a query within a React component, call `useGradesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGradesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGradesQuery({
 *   variables: {
 *      gradeDto: // value for 'gradeDto'
 *   },
 * });
 */
export function useGradesQuery(baseOptions: Apollo.QueryHookOptions<GradesQuery, GradesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GradesQuery, GradesQueryVariables>(GradesDocument, options);
      }
export function useGradesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GradesQuery, GradesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GradesQuery, GradesQueryVariables>(GradesDocument, options);
        }
export type GradesQueryHookResult = ReturnType<typeof useGradesQuery>;
export type GradesLazyQueryHookResult = ReturnType<typeof useGradesLazyQuery>;
export type GradesQueryResult = Apollo.QueryResult<GradesQuery, GradesQueryVariables>;
export const CreateExamDocument = gql`
    mutation createExam($createExamInput: CreateExamInput!) {
  createExam(createExamInput: $createExamInput) {
    id
  }
}
    `;
export type CreateExamMutationFn = Apollo.MutationFunction<CreateExamMutation, CreateExamMutationVariables>;

/**
 * __useCreateExamMutation__
 *
 * To run a mutation, you first call `useCreateExamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExamMutation, { data, loading, error }] = useCreateExamMutation({
 *   variables: {
 *      createExamInput: // value for 'createExamInput'
 *   },
 * });
 */
export function useCreateExamMutation(baseOptions?: Apollo.MutationHookOptions<CreateExamMutation, CreateExamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExamMutation, CreateExamMutationVariables>(CreateExamDocument, options);
      }
export type CreateExamMutationHookResult = ReturnType<typeof useCreateExamMutation>;
export type CreateExamMutationResult = Apollo.MutationResult<CreateExamMutation>;
export type CreateExamMutationOptions = Apollo.BaseMutationOptions<CreateExamMutation, CreateExamMutationVariables>;
export const UpdateExamDocument = gql`
    mutation updateExam($updateExamInput: UpdateExamInput!) {
  updateExam(updateExamInput: $updateExamInput) {
    id
  }
}
    `;
export type UpdateExamMutationFn = Apollo.MutationFunction<UpdateExamMutation, UpdateExamMutationVariables>;

/**
 * __useUpdateExamMutation__
 *
 * To run a mutation, you first call `useUpdateExamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateExamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateExamMutation, { data, loading, error }] = useUpdateExamMutation({
 *   variables: {
 *      updateExamInput: // value for 'updateExamInput'
 *   },
 * });
 */
export function useUpdateExamMutation(baseOptions?: Apollo.MutationHookOptions<UpdateExamMutation, UpdateExamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateExamMutation, UpdateExamMutationVariables>(UpdateExamDocument, options);
      }
export type UpdateExamMutationHookResult = ReturnType<typeof useUpdateExamMutation>;
export type UpdateExamMutationResult = Apollo.MutationResult<UpdateExamMutation>;
export type UpdateExamMutationOptions = Apollo.BaseMutationOptions<UpdateExamMutation, UpdateExamMutationVariables>;
export const ExamsDocument = gql`
    query exams($examDto: UpdateExamInput) {
  exams(examDto: $examDto) {
    ...ExamFields
  }
}
    ${ExamFieldsFragmentDoc}`;

/**
 * __useExamsQuery__
 *
 * To run a query within a React component, call `useExamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExamsQuery({
 *   variables: {
 *      examDto: // value for 'examDto'
 *   },
 * });
 */
export function useExamsQuery(baseOptions?: Apollo.QueryHookOptions<ExamsQuery, ExamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExamsQuery, ExamsQueryVariables>(ExamsDocument, options);
      }
export function useExamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExamsQuery, ExamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExamsQuery, ExamsQueryVariables>(ExamsDocument, options);
        }
export type ExamsQueryHookResult = ReturnType<typeof useExamsQuery>;
export type ExamsLazyQueryHookResult = ReturnType<typeof useExamsLazyQuery>;
export type ExamsQueryResult = Apollo.QueryResult<ExamsQuery, ExamsQueryVariables>;
export const CreateAttendanceDocument = gql`
    mutation createAttendance($createAttendanceInput: CreateAttendanceInput!) {
  createAttendance(createAttendanceInput: $createAttendanceInput) {
    id
  }
}
    `;
export type CreateAttendanceMutationFn = Apollo.MutationFunction<CreateAttendanceMutation, CreateAttendanceMutationVariables>;

/**
 * __useCreateAttendanceMutation__
 *
 * To run a mutation, you first call `useCreateAttendanceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAttendanceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAttendanceMutation, { data, loading, error }] = useCreateAttendanceMutation({
 *   variables: {
 *      createAttendanceInput: // value for 'createAttendanceInput'
 *   },
 * });
 */
export function useCreateAttendanceMutation(baseOptions?: Apollo.MutationHookOptions<CreateAttendanceMutation, CreateAttendanceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAttendanceMutation, CreateAttendanceMutationVariables>(CreateAttendanceDocument, options);
      }
export type CreateAttendanceMutationHookResult = ReturnType<typeof useCreateAttendanceMutation>;
export type CreateAttendanceMutationResult = Apollo.MutationResult<CreateAttendanceMutation>;
export type CreateAttendanceMutationOptions = Apollo.BaseMutationOptions<CreateAttendanceMutation, CreateAttendanceMutationVariables>;
export const AttendancesDocument = gql`
    query attendances($attendanceDto: UpdateAttendanceInput!) {
  attendances(attendanceDto: $attendanceDto) {
    id
    type
    student {
      id
    }
  }
}
    `;

/**
 * __useAttendancesQuery__
 *
 * To run a query within a React component, call `useAttendancesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAttendancesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAttendancesQuery({
 *   variables: {
 *      attendanceDto: // value for 'attendanceDto'
 *   },
 * });
 */
export function useAttendancesQuery(baseOptions: Apollo.QueryHookOptions<AttendancesQuery, AttendancesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AttendancesQuery, AttendancesQueryVariables>(AttendancesDocument, options);
      }
export function useAttendancesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AttendancesQuery, AttendancesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AttendancesQuery, AttendancesQueryVariables>(AttendancesDocument, options);
        }
export type AttendancesQueryHookResult = ReturnType<typeof useAttendancesQuery>;
export type AttendancesLazyQueryHookResult = ReturnType<typeof useAttendancesLazyQuery>;
export type AttendancesQueryResult = Apollo.QueryResult<AttendancesQuery, AttendancesQueryVariables>;
export const CreateLessonDocument = gql`
    mutation createLesson($createLessonInput: CreateLessonInput!) {
  createLesson(createLessonInput: $createLessonInput) {
    id
  }
}
    `;
export type CreateLessonMutationFn = Apollo.MutationFunction<CreateLessonMutation, CreateLessonMutationVariables>;

/**
 * __useCreateLessonMutation__
 *
 * To run a mutation, you first call `useCreateLessonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLessonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLessonMutation, { data, loading, error }] = useCreateLessonMutation({
 *   variables: {
 *      createLessonInput: // value for 'createLessonInput'
 *   },
 * });
 */
export function useCreateLessonMutation(baseOptions?: Apollo.MutationHookOptions<CreateLessonMutation, CreateLessonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLessonMutation, CreateLessonMutationVariables>(CreateLessonDocument, options);
      }
export type CreateLessonMutationHookResult = ReturnType<typeof useCreateLessonMutation>;
export type CreateLessonMutationResult = Apollo.MutationResult<CreateLessonMutation>;
export type CreateLessonMutationOptions = Apollo.BaseMutationOptions<CreateLessonMutation, CreateLessonMutationVariables>;
export const UpdateLessonDocument = gql`
    mutation updateLesson($updateLessonInput: UpdateLessonInput!) {
  updateLesson(updateLessonInput: $updateLessonInput) {
    id
  }
}
    `;
export type UpdateLessonMutationFn = Apollo.MutationFunction<UpdateLessonMutation, UpdateLessonMutationVariables>;

/**
 * __useUpdateLessonMutation__
 *
 * To run a mutation, you first call `useUpdateLessonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLessonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLessonMutation, { data, loading, error }] = useUpdateLessonMutation({
 *   variables: {
 *      updateLessonInput: // value for 'updateLessonInput'
 *   },
 * });
 */
export function useUpdateLessonMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLessonMutation, UpdateLessonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLessonMutation, UpdateLessonMutationVariables>(UpdateLessonDocument, options);
      }
export type UpdateLessonMutationHookResult = ReturnType<typeof useUpdateLessonMutation>;
export type UpdateLessonMutationResult = Apollo.MutationResult<UpdateLessonMutation>;
export type UpdateLessonMutationOptions = Apollo.BaseMutationOptions<UpdateLessonMutation, UpdateLessonMutationVariables>;
export const LessonsDocument = gql`
    query lessons($lessonDto: UpdateLessonInput) {
  lessons(lessonDto: $lessonDto) {
    ...LessonFields
  }
}
    ${LessonFieldsFragmentDoc}`;

/**
 * __useLessonsQuery__
 *
 * To run a query within a React component, call `useLessonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLessonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLessonsQuery({
 *   variables: {
 *      lessonDto: // value for 'lessonDto'
 *   },
 * });
 */
export function useLessonsQuery(baseOptions?: Apollo.QueryHookOptions<LessonsQuery, LessonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LessonsQuery, LessonsQueryVariables>(LessonsDocument, options);
      }
export function useLessonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LessonsQuery, LessonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LessonsQuery, LessonsQueryVariables>(LessonsDocument, options);
        }
export type LessonsQueryHookResult = ReturnType<typeof useLessonsQuery>;
export type LessonsLazyQueryHookResult = ReturnType<typeof useLessonsLazyQuery>;
export type LessonsQueryResult = Apollo.QueryResult<LessonsQuery, LessonsQueryVariables>;
export const CourseDocument = gql`
    query course($id: Int!) {
  course(id: $id) {
    ...CourseFields
  }
}
    ${CourseFieldsFragmentDoc}`;

/**
 * __useCourseQuery__
 *
 * To run a query within a React component, call `useCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCourseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCourseQuery(baseOptions: Apollo.QueryHookOptions<CourseQuery, CourseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CourseQuery, CourseQueryVariables>(CourseDocument, options);
      }
export function useCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CourseQuery, CourseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CourseQuery, CourseQueryVariables>(CourseDocument, options);
        }
export type CourseQueryHookResult = ReturnType<typeof useCourseQuery>;
export type CourseLazyQueryHookResult = ReturnType<typeof useCourseLazyQuery>;
export type CourseQueryResult = Apollo.QueryResult<CourseQuery, CourseQueryVariables>;
export const CoursesDocument = gql`
    query courses($courseDto: UpdateCourseInput) {
  courses(updateCourseInput: $courseDto) {
    ...CourseFields
  }
}
    ${CourseFieldsFragmentDoc}`;

/**
 * __useCoursesQuery__
 *
 * To run a query within a React component, call `useCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCoursesQuery({
 *   variables: {
 *      courseDto: // value for 'courseDto'
 *   },
 * });
 */
export function useCoursesQuery(baseOptions?: Apollo.QueryHookOptions<CoursesQuery, CoursesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CoursesQuery, CoursesQueryVariables>(CoursesDocument, options);
      }
export function useCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CoursesQuery, CoursesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CoursesQuery, CoursesQueryVariables>(CoursesDocument, options);
        }
export type CoursesQueryHookResult = ReturnType<typeof useCoursesQuery>;
export type CoursesLazyQueryHookResult = ReturnType<typeof useCoursesLazyQuery>;
export type CoursesQueryResult = Apollo.QueryResult<CoursesQuery, CoursesQueryVariables>;
export const ParentDocument = gql`
    query parent {
  parent {
    id
    children {
      id
      user {
        ...UserFields
      }
      attendances {
        id
        type
        lesson {
          id
          name
        }
      }
      grades {
        id
        value
        exam {
          id
          name
        }
      }
    }
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useParentQuery__
 *
 * To run a query within a React component, call `useParentQuery` and pass it any options that fit your needs.
 * When your component renders, `useParentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useParentQuery({
 *   variables: {
 *   },
 * });
 */
export function useParentQuery(baseOptions?: Apollo.QueryHookOptions<ParentQuery, ParentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ParentQuery, ParentQueryVariables>(ParentDocument, options);
      }
export function useParentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ParentQuery, ParentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ParentQuery, ParentQueryVariables>(ParentDocument, options);
        }
export type ParentQueryHookResult = ReturnType<typeof useParentQuery>;
export type ParentLazyQueryHookResult = ReturnType<typeof useParentLazyQuery>;
export type ParentQueryResult = Apollo.QueryResult<ParentQuery, ParentQueryVariables>;
export const CreateGroupDocument = gql`
    mutation createGroup($createGroupInput: CreateGroupInput!) {
  createGroup(createGroupInput: $createGroupInput) {
    id
  }
}
    `;
export type CreateGroupMutationFn = Apollo.MutationFunction<CreateGroupMutation, CreateGroupMutationVariables>;

/**
 * __useCreateGroupMutation__
 *
 * To run a mutation, you first call `useCreateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupMutation, { data, loading, error }] = useCreateGroupMutation({
 *   variables: {
 *      createGroupInput: // value for 'createGroupInput'
 *   },
 * });
 */
export function useCreateGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateGroupMutation, CreateGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGroupMutation, CreateGroupMutationVariables>(CreateGroupDocument, options);
      }
export type CreateGroupMutationHookResult = ReturnType<typeof useCreateGroupMutation>;
export type CreateGroupMutationResult = Apollo.MutationResult<CreateGroupMutation>;
export type CreateGroupMutationOptions = Apollo.BaseMutationOptions<CreateGroupMutation, CreateGroupMutationVariables>;
export const CreateCourseDocument = gql`
    mutation createCourse($createCourseInput: CreateCourseInput!) {
  createCourse(createCourseInput: $createCourseInput) {
    id
  }
}
    `;
export type CreateCourseMutationFn = Apollo.MutationFunction<CreateCourseMutation, CreateCourseMutationVariables>;

/**
 * __useCreateCourseMutation__
 *
 * To run a mutation, you first call `useCreateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCourseMutation, { data, loading, error }] = useCreateCourseMutation({
 *   variables: {
 *      createCourseInput: // value for 'createCourseInput'
 *   },
 * });
 */
export function useCreateCourseMutation(baseOptions?: Apollo.MutationHookOptions<CreateCourseMutation, CreateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCourseMutation, CreateCourseMutationVariables>(CreateCourseDocument, options);
      }
export type CreateCourseMutationHookResult = ReturnType<typeof useCreateCourseMutation>;
export type CreateCourseMutationResult = Apollo.MutationResult<CreateCourseMutation>;
export type CreateCourseMutationOptions = Apollo.BaseMutationOptions<CreateCourseMutation, CreateCourseMutationVariables>;
export const UpdateCourseDocument = gql`
    mutation updateCourse($id: Int!, $updateCourseInput: CreateCourseInput!) {
  updateCourse(id: $id, updateCourseInput: $updateCourseInput) {
    id
  }
}
    `;
export type UpdateCourseMutationFn = Apollo.MutationFunction<UpdateCourseMutation, UpdateCourseMutationVariables>;

/**
 * __useUpdateCourseMutation__
 *
 * To run a mutation, you first call `useUpdateCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCourseMutation, { data, loading, error }] = useUpdateCourseMutation({
 *   variables: {
 *      id: // value for 'id'
 *      updateCourseInput: // value for 'updateCourseInput'
 *   },
 * });
 */
export function useUpdateCourseMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCourseMutation, UpdateCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCourseMutation, UpdateCourseMutationVariables>(UpdateCourseDocument, options);
      }
export type UpdateCourseMutationHookResult = ReturnType<typeof useUpdateCourseMutation>;
export type UpdateCourseMutationResult = Apollo.MutationResult<UpdateCourseMutation>;
export type UpdateCourseMutationOptions = Apollo.BaseMutationOptions<UpdateCourseMutation, UpdateCourseMutationVariables>;
export const RemoveCourseDocument = gql`
    mutation removeCourse($id: Int!) {
  removeCourse(id: $id) {
    id
  }
}
    `;
export type RemoveCourseMutationFn = Apollo.MutationFunction<RemoveCourseMutation, RemoveCourseMutationVariables>;

/**
 * __useRemoveCourseMutation__
 *
 * To run a mutation, you first call `useRemoveCourseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCourseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCourseMutation, { data, loading, error }] = useRemoveCourseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveCourseMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCourseMutation, RemoveCourseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCourseMutation, RemoveCourseMutationVariables>(RemoveCourseDocument, options);
      }
export type RemoveCourseMutationHookResult = ReturnType<typeof useRemoveCourseMutation>;
export type RemoveCourseMutationResult = Apollo.MutationResult<RemoveCourseMutation>;
export type RemoveCourseMutationOptions = Apollo.BaseMutationOptions<RemoveCourseMutation, RemoveCourseMutationVariables>;
export const UpdateGroupDocument = gql`
    mutation updateGroup($updateGroupInput: UpdateGroupInput!) {
  updateGroup(updateGroupInput: $updateGroupInput) {
    id
  }
}
    `;
export type UpdateGroupMutationFn = Apollo.MutationFunction<UpdateGroupMutation, UpdateGroupMutationVariables>;

/**
 * __useUpdateGroupMutation__
 *
 * To run a mutation, you first call `useUpdateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGroupMutation, { data, loading, error }] = useUpdateGroupMutation({
 *   variables: {
 *      updateGroupInput: // value for 'updateGroupInput'
 *   },
 * });
 */
export function useUpdateGroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGroupMutation, UpdateGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGroupMutation, UpdateGroupMutationVariables>(UpdateGroupDocument, options);
      }
export type UpdateGroupMutationHookResult = ReturnType<typeof useUpdateGroupMutation>;
export type UpdateGroupMutationResult = Apollo.MutationResult<UpdateGroupMutation>;
export type UpdateGroupMutationOptions = Apollo.BaseMutationOptions<UpdateGroupMutation, UpdateGroupMutationVariables>;
export const GroupDocument = gql`
    query group($id: Int!) {
  group(id: $id) {
    ...GroupFields
  }
}
    ${GroupFieldsFragmentDoc}`;

/**
 * __useGroupQuery__
 *
 * To run a query within a React component, call `useGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGroupQuery(baseOptions: Apollo.QueryHookOptions<GroupQuery, GroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GroupQuery, GroupQueryVariables>(GroupDocument, options);
      }
export function useGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupQuery, GroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GroupQuery, GroupQueryVariables>(GroupDocument, options);
        }
export type GroupQueryHookResult = ReturnType<typeof useGroupQuery>;
export type GroupLazyQueryHookResult = ReturnType<typeof useGroupLazyQuery>;
export type GroupQueryResult = Apollo.QueryResult<GroupQuery, GroupQueryVariables>;
export const RemoveGroupDocument = gql`
    mutation removeGroup($id: Int!) {
  removeGroup(id: $id) {
    id
  }
}
    `;
export type RemoveGroupMutationFn = Apollo.MutationFunction<RemoveGroupMutation, RemoveGroupMutationVariables>;

/**
 * __useRemoveGroupMutation__
 *
 * To run a mutation, you first call `useRemoveGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeGroupMutation, { data, loading, error }] = useRemoveGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveGroupMutation(baseOptions?: Apollo.MutationHookOptions<RemoveGroupMutation, RemoveGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveGroupMutation, RemoveGroupMutationVariables>(RemoveGroupDocument, options);
      }
export type RemoveGroupMutationHookResult = ReturnType<typeof useRemoveGroupMutation>;
export type RemoveGroupMutationResult = Apollo.MutationResult<RemoveGroupMutation>;
export type RemoveGroupMutationOptions = Apollo.BaseMutationOptions<RemoveGroupMutation, RemoveGroupMutationVariables>;
export const GroupsDocument = gql`
    query groups {
  groups {
    ...GroupFields
  }
}
    ${GroupFieldsFragmentDoc}`;

/**
 * __useGroupsQuery__
 *
 * To run a query within a React component, call `useGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GroupsQuery, GroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, options);
      }
export function useGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupsQuery, GroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, options);
        }
export type GroupsQueryHookResult = ReturnType<typeof useGroupsQuery>;
export type GroupsLazyQueryHookResult = ReturnType<typeof useGroupsLazyQuery>;
export type GroupsQueryResult = Apollo.QueryResult<GroupsQuery, GroupsQueryVariables>;
export const TeachersDocument = gql`
    query teachers {
  users(user: {role: TEACHER}) {
    ...UserFields
    teacher {
      id
    }
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useTeachersQuery__
 *
 * To run a query within a React component, call `useTeachersQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeachersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeachersQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeachersQuery(baseOptions?: Apollo.QueryHookOptions<TeachersQuery, TeachersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TeachersQuery, TeachersQueryVariables>(TeachersDocument, options);
      }
export function useTeachersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeachersQuery, TeachersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TeachersQuery, TeachersQueryVariables>(TeachersDocument, options);
        }
export type TeachersQueryHookResult = ReturnType<typeof useTeachersQuery>;
export type TeachersLazyQueryHookResult = ReturnType<typeof useTeachersLazyQuery>;
export type TeachersQueryResult = Apollo.QueryResult<TeachersQuery, TeachersQueryVariables>;
export const StudentsDocument = gql`
    query students {
  users(user: {role: STUDENT}) {
    ...UserFields
    student {
      id
    }
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useStudentsQuery__
 *
 * To run a query within a React component, call `useStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useStudentsQuery(baseOptions?: Apollo.QueryHookOptions<StudentsQuery, StudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StudentsQuery, StudentsQueryVariables>(StudentsDocument, options);
      }
export function useStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentsQuery, StudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StudentsQuery, StudentsQueryVariables>(StudentsDocument, options);
        }
export type StudentsQueryHookResult = ReturnType<typeof useStudentsQuery>;
export type StudentsLazyQueryHookResult = ReturnType<typeof useStudentsLazyQuery>;
export type StudentsQueryResult = Apollo.QueryResult<StudentsQuery, StudentsQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($createUserInput: CreateUserInput!) {
  createUser(createUserInput: $createUserInput) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation updateUser($updateUserInput: UpdateUserInput!) {
  updateUser(updateUserInput: $updateUserInput) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updateUserInput: // value for 'updateUserInput'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UserDocument = gql`
    query user($user: UpdateUserInput!) {
  user(user: $user) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const RemoveUserDocument = gql`
    mutation removeUser($id: Int!) {
  removeUser(id: $id) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export type RemoveUserMutationFn = Apollo.MutationFunction<RemoveUserMutation, RemoveUserMutationVariables>;

/**
 * __useRemoveUserMutation__
 *
 * To run a mutation, you first call `useRemoveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserMutation, { data, loading, error }] = useRemoveUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveUserMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserMutation, RemoveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUserMutation, RemoveUserMutationVariables>(RemoveUserDocument, options);
      }
export type RemoveUserMutationHookResult = ReturnType<typeof useRemoveUserMutation>;
export type RemoveUserMutationResult = Apollo.MutationResult<RemoveUserMutation>;
export type RemoveUserMutationOptions = Apollo.BaseMutationOptions<RemoveUserMutation, RemoveUserMutationVariables>;
export const UsersDocument = gql`
    query users {
  users {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const MeDocument = gql`
    query me {
  currentUser {
    ...MeFields
  }
}
    ${MeFieldsFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    