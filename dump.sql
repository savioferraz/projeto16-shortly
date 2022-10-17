--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: links; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.links (
    id integer NOT NULL,
    user_id integer NOT NULL,
    url text NOT NULL,
    short_url text NOT NULL,
    visit_count integer DEFAULT 0 NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    token text NOT NULL,
    active boolean DEFAULT true NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    name text NOT NULL,
    password text NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.links VALUES (10, 3, 'https://app.sli.do/event/uvmVqQF6LDDTVtqQf6XGwr', 'bzeNuU8ltBNQnPDIk7WAa', 0, '2022-10-16 19:26:59.09108');
INSERT INTO public.links VALUES (13, 1, 'https://bootcampra.notion.site/Materiais-038b870362b744d88c047f4e4e8beb46', '9RX6nBH6W2_v9XaiY1HoX', 8, '2022-10-16 19:47:12.397837');
INSERT INTO public.links VALUES (14, 1, 'https://bootcampra.notion.site/Curso-de-Desenvolvimento-Full-Stack-Driven-Manual-do-Aluno-c3b1812cf6d74a788a037537c8691483', 'xBpOPfFBnVnaWr9BIJiq1', 2, '2022-10-16 19:47:35.750817');
INSERT INTO public.links VALUES (16, 4, 'https://www.postgresqltutorial.com/postgresql-aggregate-functions/postgresql-sum-function/#:~:text=If%20you%20want%20the%20SUM,the%20first%20argument%20is%20NULL%20.', 'jWQQAsmIrhCsZsUwzj5mn', 1, '2022-10-16 21:52:30.287393');
INSERT INTO public.links VALUES (12, 3, 'https://bootcampra.notion.site/Projeto-Shortly-API-21533489cd5042058524caf3429b62e4', '2oGGgQHvyFWinyTLJCUHq', 2, '2022-10-16 19:35:36.489691');
INSERT INTO public.links VALUES (11, 3, 'https://bootcampra.notion.site/Turma-07-889d10656d6c4317ab064012b508ae12', 'MghjULJEmQMYGh9jPUKZD', 1, '2022-10-16 19:27:01.936365');


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (3, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NTk1MDkyMywiZXhwIjoxNjY1OTUyNzIzfQ.DY9mGJFtvm0B8OBF5tr_vyk73VLcT60vYD4huLJMxDE', true);
INSERT INTO public.sessions VALUES (4, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY2NTk1NTE1MiwiZXhwIjoxNjY1OTU2OTUyfQ.GoHUcMK2EMhSJxQ71GeO5sRyHrzERgvNcZAKVXpQQrc', true);
INSERT INTO public.sessions VALUES (5, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY2NTk1NjM0NSwiZXhwIjoxNjY1OTU4MTQ1fQ.IFRz-EEid_NAA9dBHiQm4cKtmKrTTjhE9C4CCIqTEEk', true);
INSERT INTO public.sessions VALUES (6, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY2NTk1NzQ4MCwiZXhwIjoxNjY1OTU5MjgwfQ.G5jpTpqWuj5sL8nqz4l7NuSGeR_8WRpO3ftA6Nb2aeI', true);
INSERT INTO public.sessions VALUES (7, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY2NTk1OTQ1MywiZXhwIjoxNjY1OTYxMjUzfQ.LoAHzYgmKiGiW4tvmhFjtJuRDHKLbpmC0xUW7_WsHzI', true);
INSERT INTO public.sessions VALUES (8, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2NTk2MDM5OCwiZXhwIjoxNjY1OTYyMTk4fQ.Toqo2VZH2Ps1SCC0Ab7R2Zw7xy62Z7Hd9clFMT3rGNE', true);
INSERT INTO public.sessions VALUES (9, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTY2NTk2NzkwOSwiZXhwIjoxNjY1OTY5NzA5fQ.L54nD60QB4YBcpuV2Syt8z7tArhdLJeOLP7Hq9N5YhI', true);
INSERT INTO public.sessions VALUES (10, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY2NjAyMDI0NywiZXhwIjoxNjY2MDIyMDQ3fQ.Ou6jUL3nEqSihVQLsGZT9C8MoPzS37CTCflYEt8-At0', true);
INSERT INTO public.sessions VALUES (11, 5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImlhdCI6MTY2NjAyMjEyNCwiZXhwIjoxNjY2MDIzOTI0fQ.0kPe_0LTHgpBvlxCrQifP2iM7LtJD5EhOtm1PQwun9g', true);
INSERT INTO public.sessions VALUES (12, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImlhdCI6MTY2NjAyMjYzNiwiZXhwIjoxNjY2MDI0NDM2fQ.EV4HPvd-EotSN0HcK1SLN1ROZKFbX221777NISvbieI', true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'joao@driven.com.br', 'Joao', '$2b$10$e6aFg9P5QvtYY6yhV.FVtO85Uj/sh6BH3kGwKFV6L1f7XNZ80k7YC');
INSERT INTO public.users VALUES (2, 'teste@driven.com', 'teste', '$2b$10$XpStvYh9zrFGh1oXewX5vOmtMD6qlzuSAhIVrRM89zst/Vy2ZO1ku');
INSERT INTO public.users VALUES (3, 'teste@crypt.net', 'teste', '$2b$10$eDeiPwez61o1O/UTLl0vTOqWr21Jx5cxNvFcymzR9LBarRRF9C9sW');
INSERT INTO public.users VALUES (4, 'oi@mail.com', 'oi', '$2b$10$tnaYOWHMfh866.z9w.mKJ.bo7Bjpkt6k7zYq0dmhjHBLQ5wchyah.');
INSERT INTO public.users VALUES (5, 'novo@mail.net', 'novo', '$2b$10$o2NQNByCGkCKU966L9noGOklXB7v3Cnm01kIh2H0wwvannx6cTZfu');


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.links_id_seq', 16, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 12, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: links links_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: links links_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: sessions sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

