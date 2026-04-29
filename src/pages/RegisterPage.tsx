import MyHeader from "../common/MyHeader";
import MyButton from "../common/MyButton";
import MyInput from "../common/MyInput";
import type {ICreatePost} from "../types/ICreatePost.ts";
import {useFormik} from "formik";
import {useCreatePostMutation} from "../services/apiPosts.ts";
import MyInputPassword from "../common/MyInputPassword";
import MyInputImage from "../common/MyInputImage";

const RegisterPage = () => {

    const [createPost] = useCreatePostMutation();

    //post запит - це спеціальний запит на сервер, який призначений для
    //зміни даних - у більшості випадків для створення інформації


    const initValues: ICreatePost = {
        title: "",
        body: "",
        userId: 0
    }
    const submitHandler = async (values: ICreatePost) => {
        try {
            const result = await createPost(values).unwrap();
            console.log("Відправк азапиту на сервер", result);
        }
        catch(error){
            console.log("Сталася халепа, ось пішло не так", error)
        }
        // console.log(values);
    }

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: submitHandler
    });
    //handleChange
    const {handleSubmit, handleChange} = formik;

    return (
        <>
            <div className="max-w-2xl mx-auto p-8">
                <MyHeader text={"Створити реєстрацію"}/>
                <form onSubmit={handleSubmit}>
                    <MyInput label={"Привіще"}
                             placeholder={"Вкажіть Призвіще"}
                             id={"LastName"}
                             onChange={handleChange}
                    />
                    <MyInput label={"Ім'я"}
                             placeholder={"Вкажіть Ім'я"}
                             id={"FirstName"}
                             onChange={handleChange}
                    />
                    <MyInputPassword label={"Пароль"}
                             placeholder={"Вкажіть Пароль"}
                             id={"password"}
                             onChange={handleChange}
                    />
                    <MyInputImage label={"Фото"}
                                     placeholder={"Вкажіть Фото"}
                                     id={"Photo"}
                                     onChange={handleChange}
                                  objectFit = {"contain"}
                                  previewHight =  {"h-96"}
                    />
                    <MyButton text={"Створити"}/>
                </form>
            </div>
        </>
    )
}

export default RegisterPage;