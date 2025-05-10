/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { UserServices } from "./user.service";
import AppError from "../../errorHelpers/AppError";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
    //  throw new AppError(httpStatus.BAD_REQUEST, "fake error")
         const user = await UserServices.createUser(req.body)

       

        res.status(httpStatus.CREATED).json({
            message: "User Create Successfully",
            user
        })
    } catch (err: any) {
        console.log(err);
        next(err)
        }
    }


export const UserControllers = {
    createUser
}