-- SEQUENCE: public.campanias_campania_id_seq

-- DROP SEQUENCE IF EXISTS public.campanias_campania_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.campanias_campania_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY campanias.campania_id;

ALTER SEQUENCE public.campanias_campania_id_seq
    OWNER TO postgres;
-- Table: public.campanias

-- DROP TABLE IF EXISTS public.campanias;

CREATE TABLE IF NOT EXISTS public.campanias
(
    campania_id integer NOT NULL DEFAULT nextval('campanias_campania_id_seq'::regclass),
    promocion_id integer,
    medio_publicitar character varying COLLATE pg_catalog."default",
    fecha_inicio date,
    fecha_final date,
    created date,
    updated date,
    enable boolean,
    CONSTRAINT campanias_pkey PRIMARY KEY (campania_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.campanias
    OWNER to postgres;