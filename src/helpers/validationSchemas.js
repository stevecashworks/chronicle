import * as Yup from "yup";

export const personalSchema = Yup.object({

    license_number: Yup.string().required(),

    date_of_birth: Yup.string().required(),

    first_name: Yup.string().required(),

    last_name: Yup.string().required(),

    email: Yup.string()
        .email("Invalid email")
        .required(),

    phone: Yup.string().required(),

    address: Yup.string().required(),

    state: Yup.string().required(),

    lga: Yup.string().required(),

    gender: Yup.string().required(),
    password:Yup.string().required(),
    image: Yup.object().required()

});
export const educationSchema = Yup.object({

    institution_name: Yup.string().required(),

    degree: Yup.string().required(),

    start_date: Yup.string().required(),

    end_date: Yup.string().required()

});
export const experienceSchema = Yup.object({

    organization_name: Yup.string().required(),

    position: Yup.string().required(),

    resumption_date: Yup.date().required(),
    is_current_job: Yup.boolean().required(),
    resignation_date: Yup.date()

});