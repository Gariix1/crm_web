-- SEQUENCE: public.prospecto_prospecto_id_seq

-- DROP SEQUENCE IF EXISTS public.prospecto_prospecto_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.prospecto_prospecto_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY prospectos.prospecto_id;

ALTER SEQUENCE public.prospecto_prospecto_id_seq
    OWNER TO postgres;
-- Table: public.prospectos

-- DROP TABLE IF EXISTS public.prospectos;

CREATE TABLE IF NOT EXISTS public.prospectos
(
    prospecto_id integer NOT NULL DEFAULT nextval('prospecto_prospecto_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    identificacion character varying COLLATE pg_catalog."default",
    origen character varying COLLATE pg_catalog."default",
    telefono numeric,
    direccion character varying COLLATE pg_catalog."default",
    correo character varying COLLATE pg_catalog."default",
    created date,
    updated date,
    enable boolean,
    CONSTRAINT prospecto_pkey PRIMARY KEY (prospecto_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.prospectos
    OWNER to postgres;