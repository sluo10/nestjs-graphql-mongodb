import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRespository: Repository<Student>,
  ) {}

  async getStudent(id: string): Promise<Student> {
    return this.studentRespository.findOne({ id });
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRespository.find();
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    const student: Student = this.studentRespository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return this.studentRespository.save(student);
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRespository.find({
      where: {
        id: {
          $in: studentIds,
        },
      },
    });
  }
}
