import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './create-lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRespository: Repository<Lesson>,
  ) {}

  async getLesson(id: string): Promise<Lesson> {
    const lesson = await this.lessonRespository.findOne({ id });
    if (!lesson) {
      throw new NotFoundException();
    }
    return lesson;
  }

  async getLessons(): Promise<Lesson[]> {
    return this.lessonRespository.find();
  }

  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson: Lesson = this.lessonRespository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students,
    });

    return this.lessonRespository.save(lesson);
  }

  async assignStudentsToLesson(
    lessonId: string,
    studentIds: string[],
  ): Promise<Lesson> {
    const lesson: Lesson = await this.getLesson(lessonId);
    lesson.students = [...lesson.students, ...studentIds];
    return this.lessonRespository.save(lesson);
  }
}
