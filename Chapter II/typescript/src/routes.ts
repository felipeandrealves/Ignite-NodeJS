import { Request, Response } from "express";

import CreateCourseService from "./CreateCourseService";

export function CreateCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Felipe Alves",
    duration: 10,
  });

  CreateCourseService.execute({
    name: "ReactJS",
    educator: "Felipe Alves",
  });

  return response.send();
}
