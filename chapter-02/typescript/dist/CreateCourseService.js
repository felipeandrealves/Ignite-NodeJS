"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ duration, educator, name }) {
        console.log(name, educator, duration);
    }
}
exports.default = new CreateCourseService();
