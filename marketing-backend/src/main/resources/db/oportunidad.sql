-- SEQUENCE: public.oportunidad_oportunidad_id_seq

-- DROP SEQUENCE IF EXISTS public.oportunidad_oportunidad_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.oportunidad_oportunidad_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY oportunidades.oportunidad_id;

ALTER SEQUENCE public.oportunidad_oportunidad_id_seq
    OWNER TO postgres;

-- Table: public.oportunidades

-- DROP TABLE IF EXISTS public.oportunidades;

CREATE TABLE IF NOT EXISTS public.oportunidades
(
    oportunidad_id integer NOT NULL DEFAULT nextval('oportunidad_oportunidad_id_seq'::regclass),
    prospecto_id integer,
    monto numeric,
    etapa_id integer,
    vendedor_id integer,
    campania_id integer,
    created date,
    updated date,
    enable boolean,
    CONSTRAINT oportunidad_pkey PRIMARY KEY (oportunidad_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.oportunidades
    OWNER to postgres;

