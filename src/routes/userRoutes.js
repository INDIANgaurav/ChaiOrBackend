import { Router } from "express";
import { registerUser } from "../controllers/userController.js";
const router = Router() ;
import {upload} from "../middlewares/multer.middleware.js"


router.route("/register").post(
    
    upload.fields({
        name: "avatar" ,
        maxCount:1
    },
    {
        name: "coverImage" ,
        maxCount:1
    }

)
    ,registerUser)
// router.route("/login").post(registerUser)


export default router ;
