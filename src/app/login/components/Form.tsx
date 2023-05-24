import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const submit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="p-4">
      <div>
        <input
          type="text"
          placeholder="Usuario"
          className="input"
          {...register("username", {
            required: "El campo usuario es requerido",
          })}
        />
        {errors.username && (
          <p className="text-red-500 text-xs" role="alert">
            {errors.username?.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Contraseña"
          className="input"
          {...register("password", {
            required: "El campo contraseña es requerido",
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-xs" role="alert">
            {errors.password?.message}
          </p>
        )}
      </div>

      <p className="text-slate-500 mt-10 text-sm">
        ¿No tienes una cuenta?{" "}
        <Link
          href={"/register"}
          className="text-black hover:text-slate-600 cursor-pointer"
        >
          Regístrate.
        </Link>
      </p>

      {/* {resultFech === 404 ||
            (active === false && (
              <p className="pl-1 text-xs text-rose-500">
                el usuario no se encuentra registrado
              </p>
            ))}
          {resultFech === 400 && (
            <p className="pl-1 text-xs text-rose-500">
              el usuario o contraseña son incorrectos
            </p>
          )} */}

      <button className="w-full bg-black hover:bg-[#2b2b2b] p-3 rounded-lg border-transparent mt-8 text-white uppercase">
        Iniciar
      </button>
    </form>
  );
};

export default Form;
