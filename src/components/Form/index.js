import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import User from "../User";
import "./style.css";
function Form({ info, setInfo, setCard, setForm }) {
  const showInfo = () => {
    if (info !== undefined) {
      setCard(true);
      setForm(false);
    }
  };

  const formSchema = yup.object().shape({
    user: yup.string().required("Username Obrigatório"),
    name: yup.string().required("Nome obrigátorio"),
    cpf: yup.string().required("CPF obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    confirmEmail: yup
      .string()
      .required("Email não confere")
      .oneOf([yup.ref("email"), null], "Email não confere"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup
      .string()
      .required("Senha não confere")
      .oneOf(
        [yup.ref("password"), null],
        "A senha deve ser a mesma da anterior"
      ),
    terms: yup.string().required("obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmitFunction = (data) => {
    setInfo(data);
    alert("Cadastro realizado com sucesso");
  };

  return (
    <form onSubmit={handleSubmit(onSubmitFunction)} className="form">
      <fieldset>
        <legend>Cadastro</legend>
        <input
          type="text"
          placeholder="Nome de usuário*"
          maxLength="18"
          {...register("user")}
        />
        <span>{errors.user?.message}</span>
        <input type="text" placeholder="Nome completo*" {...register("name")} />
        <span>{errors.name?.message}</span>
        <input
          maxLength="11"
          type="number"
          placeholder="CPF*"
          {...register("cpf")}
        />
        <span>{errors.cpf?.message}</span>
        <input
          type="email"
          placeholder="Endereço de Email*"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>
        <input
          type="email"
          placeholder="Confirme seu Email*"
          {...register("confirmEmail")}
        />
        <span>{errors.confirmEmail?.message}</span>
        <br />
        <input type="password" placeholder="Senha*" {...register("password")} />

        <input
          placeholder="Confirme senha*"
          type="password"
          {...register("confirmPassword")}
        />

        <br />
        <span>{errors.password?.message}</span>
        <br />
        <span>{errors.confirmPassword?.message}</span>
        <br />
        <input type="checkbox" {...register("terms")} />
        <label for="terms">Aceitar os termos e condições</label>

        <button className="cadastrar" type="submit">
          Cadastrar
        </button>
      </fieldset>
      <button className="btnShow" onClick={showInfo}>
        Mostrar info
      </button>
    </form>
  );
}
export default Form;
