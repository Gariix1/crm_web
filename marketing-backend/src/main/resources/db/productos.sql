-- SEQUENCE: public.productos_producto_id_seq

-- DROP SEQUENCE IF EXISTS public.productos_producto_id_seq;

CREATE SEQUENCE IF NOT EXISTS public.productos_producto_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY productos.producto_id;

ALTER SEQUENCE public.productos_producto_id_seq
    OWNER TO postgres;
-- Table: public.productos

-- DROP TABLE IF EXISTS public.productos;

CREATE TABLE IF NOT EXISTS public.productos
(
    producto_id integer NOT NULL DEFAULT nextval('productos_producto_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default",
    descripcion character varying COLLATE pg_catalog."default",
    marca character varying COLLATE pg_catalog."default",
    modelo character varying COLLATE pg_catalog."default",
    created date,
    updated date,
    enable boolean,
    CONSTRAINT productos_pkey PRIMARY KEY (producto_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.productos
    OWNER to postgres;