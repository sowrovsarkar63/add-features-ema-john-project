import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Shipping = () => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <h2>Shipping</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="email" {...register("email")} />
                <br />

                <input
                    defaultValue={user.displayName}
                    {...register("name", { required: true })}
                />
                <br />
                <input
                    defaultValue="adress"
                    {...register("adress", { required: true })}
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;
