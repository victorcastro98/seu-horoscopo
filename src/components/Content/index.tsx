import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormData {
  fullName: string;
  birthdate: string;
  birthplace: string;
  email: string;
  promotionalEmail?: boolean;
}

const Content: React.FC = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Nome é obrigatório"),
    birthdate: yup.string().required("Data de Nascimento é obrigatória"),
    birthplace: yup.string().required("Local de Nascimento é obrigatório"),
    email: yup.string().email("Email inválido").required("Email é obrigatório"),
    promotionalEmail: yup.boolean(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [isResult, setIsResult] = React.useState(false as boolean);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    if (data.birthdate && data.birthplace && data.fullName && data.email) {
      setIsResult(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center h-full bg-[#5259FF] w-[600px] h-[400px] mt-2 rounded-lg "
    >
      {isResult ? (
        <>result</>
      ) : (
        <div className="flex flex-col gap-2 text-xl justify-evenly pt-4 w-[500px] h-[400px]">
          <div className="flex flex-row gap-2 h-[50px] items-start">
            <label className="min-w-fit">Nome Completo:</label>
            <div className="w-full flex flex-col justify-end items-end">
              <input
                {...register("fullName")}
                className="text-center rounded w-full"
              />
              {errors.fullName && <p>{errors.fullName.message}</p>}
            </div>
          </div>

          <div className="flex flex-row gap-2 h-[50px] items-start">
            <label className="min-w-fit">Data de Nascimento:</label>
            <div className="w-full flex flex-col justify-end items-end">
              <input
                type="date"
                {...register("birthdate")}
                className="text-center rounded w-full"
              />
              {errors.birthdate && <p>{errors.birthdate.message}</p>}
            </div>
          </div>

          <div className="flex flex-row gap-2 h-[50px] items-start">
            <label className="min-w-fit">Local de Nascimento:</label>
            <div className="w-full flex flex-col justify-end items-end">
              <input
                {...register("birthplace")}
                className="text-center rounded w-full"
              />
              {errors.birthplace && <p>{errors.birthplace.message}</p>}
            </div>
          </div>

          <div className="flex flex-row gap-2 h-[50px] items-start">
            <label className="min-w-fit">Email:</label>
            <div className="w-full flex flex-col justify-end items-end">
              <input
                type="email"
                {...register("email")}
                className="text-center rounded w-full"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <label className="flex fler-row gap-2">
              <input type="checkbox" {...register("promotionalEmail")} />
              Quero receber emails promocionais
            </label>
          </div>

          <button
            type="submit"
            className="bg-black text-light py-2 px-3 h-[40px] rounded-xl text-xl"
          >
            Receber resultados
          </button>
        </div>
      )}
    </form>
  );
};

export default Content;
