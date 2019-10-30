import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import Layout from '../components/layout';
import SEO from '../components/seo';

import HeroImage from '../assets/lc-home-hero.svg';

import { SecondaryCard, LandingCard } from '../components/MarketingPages/Cards';
import '../components/MarketingPages/Buttons.scss';

import './index.scss';


const HeroStyle = {
  paddingBottom: '0px',
  paddingLeft: '24px',
  paddingTop: '48px',
};
const heroMargin = {
  margin: '0 auto',
  maxWidth: '1200px',
};
const videoStyle = {
  padding: '0px 40px',
  marginTop: '80px',
};
const landingBottom = {
  padding: '40px',
  backgroundColor: '#eaf2f8',
  marginTop: '80px',
};
const landingBottomContent = {
  padding: '32px',
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" slug="/" />
    <section className="hero" style={HeroStyle}>
      <div className="row" style={heroMargin}>
        <div className="col-lg-5 hero-text">
          <h2>Postman Learning Center</h2>
          <p>
The Postman Learning Center has all of the resources you
          need to ramp up quickly and extend your skills.
          </p>
          <a href="/docs/" className="btn btn__primary">Explore the Docs</a>
        </div>
        <div className="col-lg-7">
          <img src={HeroImage} className="hero-image" alt="Hero" />
        </div>
      </div>
    </section>
    <section className="row design">
      <div className="col-md-12 text-center">
        <h3>Design and Develop APIs</h3>
        <div className="row justify-content-center">
          <LandingCard
            title="Managing APIs"
            description="Learn how to create, read, update, and delete APIs in Postman."
            link="https://learning.getpostman.com/docs/postman/design-and-develop-apis/managing-apis/"
            icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTc0IiBoZWlnaHQ9IjIwMSIgdmlld0JveD0iMCAwIDE3NCAyMDEiPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0xMzEuNjA2LjljNC44MjcgMCA4Ljc0MSAzLjkxIDguNzQxIDguNzU4djEwMi41NjhjMCA0LjgzNy0zLjkyIDguNzU3LTguNzQxIDguNzU3SDkuMzQ0Yy00LjgyNyAwLTguNzQxLTMuOTEtOC43NDEtOC43NTdWOS42NThDLjYwMyA0LjgyIDQuNTIzLjkgOS4zNDQuOWgxMjIuMjYyeiIvPgogICAgICAgIDxlbGxpcHNlIGlkPSJjIiBjeD0iNi45NTIiIGN5PSI3LjIxNCIgcng9IjYuODciIHJ5PSI2Ljg4NiIvPgogICAgICAgIDxlbGxpcHNlIGlkPSJlIiBjeD0iNi45ODIiIGN5PSI3LjEwMSIgcng9IjYuODciIHJ5PSI2Ljg4NiIvPgogICAgICAgIDxlbGxpcHNlIGlkPSJnIiBjeD0iNy4wMTYiIGN5PSI2Ljk5MiIgcng9IjYuODciIHJ5PSI2Ljg4NiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjNDkzRTVFIiBkPSJNMTQwLjIyNyAzNy4wMjJoMzMuNzY1djkyLjI3MmgtMzMuNzY1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM0MjU5NjYiIGQ9Ik03MCA0aDIuNjI1djQyLjFINzB6Ii8+CiAgICAgICAgPGVsbGlwc2UgY3g9IjcxLjI1IiBjeT0iNS4yNjMiIGZpbGw9IiNGNDgxNUIiIHJ4PSI1LjI1IiByeT0iNS4yNjMiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNDkzRTVFIiBkPSJNMjMuMDg1IDE0NC40NThoOTkuMTY1djEyLjE4M0gyMy4wODV6Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAyNCkiPgogICAgICAgICAgICA8bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjN0Q3MjhFIiB4bGluazpocmVmPSIjYSIvPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iMTMxLjIzOSIgaGVpZ2h0PSIxMTIuMTgiIHg9IjQuODU3IiB5PSI0Ljg1IiBmaWxsPSIjNTA0RjU2IiBtYXNrPSJ1cmwoI2IpIiByeD0iNC42NjUiLz4KICAgICAgICAgICAgPGcgbWFzaz0idXJsKCNiKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjMDAwIiBzdHJva2U9IiM3RDcyOEUiIHN0cm9rZS13aWR0aD0iMS4xMjUiIGQ9Ik01LjIzMiA2OS41OTlIMzYuMDFNMTA0LjkxMSA3OS43NDhoMzAuNzczTTEwNS40NTUgNTIuNjgzaDMwLjc3NiIvPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjN0Q3MjhFIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMTI1IiBkPSJNNC42ODkgNDYuNDgxaDMwLjc3NiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0YyNkY0MCIgZD0iTTc4LjMwNSA1MS42NDJsLjA0NSAxNC44MTRMNjUuNDg0IDczLjlsLS4wNDEtMTQuODE0eiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0Q0NEUyNyIgZD0iTTY1LjQ4NCA3My45bC0xMi40MzUtNy4yNDQtLjA0MS0xNC44MTUgMTIuNDM0IDcuMjQ0eiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0Y0ODE1QiIgZD0iTTY1LjQ0MiA1OS4wODVsLTEyLjQzNC03LjI0NCAxMi44NjItNy40NDYgMTIuNDM1IDcuMjQ3eiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0YyNkY0MCIgZD0iTTk1LjA5NCA2Mi4xMDNsLjA0NSAxNC44MTgtMTIuODY3IDcuNDQzLS4wNC0xNC44MTR6Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRDQ0RTI3IiBkPSJNODIuMjcyIDg0LjM2NGwtMTIuNDM0LTcuMjQzLS4wNDItMTQuODE1IDEyLjQzNSA3LjI0NHoiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGNDgxNUIiIGQ9Ik04Mi4yMzEgNjkuNTVsLTEyLjQzNS03LjI0NEw4Mi42NiA1NC44NmwxMi40MzUgNy4yNDN6Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRjI2RjQwIiBkPSJNNjEuMzAzIDYxLjEzNGwuMDQgMTQuODE4LTEyLjg2MiA3LjQ0Mi0uMDQxLTE0LjgxNHoiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNENDRFMjciIGQ9Ik00OC40ODEgODMuMzk0bC0xMi40MzUtNy4yNDMtLjA0MS0xNC44MThMNDguNDQgNjguNTh6Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRjQ4MTVCIiBkPSJNNDguNDQgNjguNThsLTEyLjQzNS03LjI0NyAxMi44NjItNy40NDMgMTIuNDM2IDcuMjQ0eiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0YyNkY0MCIgZD0iTTc4LjA5MSA3MS41OTlsLjA0MSAxNC44MTQtMTIuODYyIDcuNDQ2LS4wNDEtMTQuODE3eiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0Q0NEUyNyIgZD0iTTY1LjI3IDkzLjg2bC0xMi40MzUtNy4yNDQtLjA0MS0xNC44MTggMTIuNDM1IDcuMjQ0eiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0Y0ODE1QiIgZD0iTTY1LjIyOSA3OS4wNDJsLTEyLjQzNS03LjI0NCAxMi44NjItNy40NDNMNzguMDkxIDcxLjZ6Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRjI2RjQwIiBkPSJNMTExLjAwOSA3MS45NDhsLjA0MSAxNC44MTQtMTIuODYyIDcuNDQ3LS4wNDItMTQuODE4eiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0Q0NEUyNyIgZD0iTTk4LjE4OCA5NC4yMDlsLTEyLjQzNi03LjI0NC0uMDQtMTQuODE3IDEyLjQzNCA3LjI0M3oiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGNDgxNUIiIGQ9Ik05OC4xNDYgNzkuMzkxbC0xMi40MzUtNy4yNDMgMTIuODYzLTcuNDQzIDEyLjQzNSA3LjI0M3oiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGMjZGNDAiIGQ9Ik05NC4wMDYgODEuNDRsLjA0MSAxNC44MTgtMTIuODYyIDcuNDQzLS4wNDEtMTQuODE1eiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0Q0NEUyNyIgZD0iTTgxLjE4NSAxMDMuN0w2OC43NSA5Ni40NThsLS4wNDUtMTQuODE0IDEyLjQzOSA3LjI0M3oiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGNDgxNUIiIGQ9Ik04MS4xNDQgODguODg2bC0xMi40MzktNy4yNDMgMTIuODY2LTcuNDQ3IDEyLjQzNSA3LjI0NHoiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGMjZGNDAiIGQ9Ik03Ni45MDMgMjcuNTg1bC4wNCAxNC44MTQtMTIuODYyIDcuNDQ2LS4wNDEtMTQuODE4eiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0Q0NEUyNyIgZD0iTTY0LjA4MSA0OS44NDVsLTEyLjQzOS03LjI0My0uMDQtMTQuODE4IDEyLjQzOCA3LjI0M3oiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGNDgxNUIiIGQ9Ik02NC4wNCAzNS4wMjdsLTEyLjQzOS03LjI0MyAxMi44NjMtNy40NDMgMTIuNDM4IDcuMjQ0eiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0YyNkY0MCIgZD0iTTkzLjY5MSAzOC4wNWwuMDQxIDE0LjgxNEw4MC44NyA2MC4zMWwtLjA0NS0xNC44MTh6Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRDQ0RTI3IiBkPSJNODAuODcgNjAuMzFsLTEyLjQzOS03LjI0Ny0uMDQxLTE0LjgxNCAxMi40MzUgNy4yNDN6Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRjQ4MTVCIiBkPSJNODAuODI1IDQ1LjQ5Mkw2OC4zOSAzOC4yNWwxMi44NjYtNy40NDcgMTIuNDM1IDcuMjQ4eiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0YyNkY0MCIgZD0iTTU5Ljg5NiAzNy4wNzZsLjA0MSAxNC44MTgtMTIuODYyIDcuNDQzLS4wNDEtMTQuODE0eiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0Q0NEUyNyIgZD0iTTQ3LjA3NSA1OS4zMzdMMzQuNjQgNTIuMDkzbC0uMDQxLTE0LjgxNCAxMi40MzUgNy4yNDR6Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRjQ4MTVCIiBkPSJNNDcuMDM0IDQ0LjUyM2wtMTIuNDM1LTcuMjQ0IDEyLjg2Mi03LjQ0NiAxMi40MzUgNy4yNDN6Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRjI2RjQwIiBkPSJNNzYuNjg1IDQ3LjU0MWwuMDQxIDE0LjgxOC0xMi44NjIgNy40NDMtLjA0MS0xNC44MTR6Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRDQ0RTI3IiBkPSJNNjMuODY0IDY5LjgwMmwtMTIuNDM1LTcuMjQ0LS4wNDEtMTQuODE4IDEyLjQzNCA3LjI0OHoiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGNDgxNUIiIGQ9Ik02My44MjIgNTQuOTg4TDUxLjM4OSA0Ny43NGwxMi44NjItNy40NDIgMTIuNDM1IDcuMjQzeiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0YyNkY0MCIgZD0iTTEwOS42MDMgNDcuODlsLjA0NCAxNC44MTktMTIuODY2IDcuNDQyLS4wNDEtMTQuODE3eiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0Q0NEUyNyIgZD0iTTk2Ljc4MSA3MC4xNTFsLTEyLjQzNS03LjI0My0uMDQxLTE0LjgxOCAxMi40MzUgNy4yNDR6Ii8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRjQ4MTVCIiBkPSJNOTYuNzQgNTUuMzM0TDg0LjMwNSA0OC4wOWwxMi44NjItNy40NDMgMTIuNDM2IDcuMjQ0eiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0YyNkY0MCIgZD0iTTkyLjYgNTcuMzgybC4wNDEgMTQuODE4LTEyLjg2MiA3LjQ0My0uMDQxLTE0LjgxNHoiLz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNENDRFMjciIGQ9Ik03OS43NzkgNzkuNjQzbC0xMi40MzUtNy4yNDQtLjA0MS0xNC44MTQgMTIuNDM1IDcuMjQ0eiIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0Y0ODE1QiIgZD0iTTc5LjczNyA2NC44MjlsLTEyLjQzNC03LjI0NCAxMi44NjItNy40NDZMOTIuNiA1Ny4zODJ6Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTEzNC43Ny43NTdINzAuNzNWMTI1aDY0LjA0YzUuMDk1LS4wMDYgOS4yMjMtNC4wNTUgOS4yMy05LjA1MlY5LjgwOGMtLjAwNy00Ljk5Ni00LjEzNS05LjA0NS05LjIzLTkuMDUxeiIgbWFzaz0idXJsKCNiKSIgb3BhY2l0eT0iLjEyIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxwYXRoIGZpbGw9IiM0OTNFNUUiIGQ9Ik0xMC41IDE2Ny4yNUgxMzVWMjAxSDEwLjV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzM3MkU0OCIgZD0iTTQ5LjUgMTc0Ljc1aDQ1Ljc1VjE3N0g0OS41ek00OS41IDE3OC41aDQ1Ljc1djIuMjVINDkuNXpNNDkuNSAxODIuMjVoNDUuNzV2Mi4yNUg0OS41ek0xOCAxNzYuODA3QTIuODEzIDIuODEzIDAgMCAxIDIwLjgxIDE3NGgyMC42M2EyLjgwOSAyLjgwOSAwIDAgMSAyLjgxIDIuODA3VjE4MEgxOHYtMy4xOTN6TTE4IDE4Mi4yNWgyNi4yNXYxMS4yNUgxOHpNMTAxLjI1IDE3Ni44MDdhMi44MTMgMi44MTMgMCAwIDEgMi44MS0yLjgwN2gyMC42M2EyLjgwOSAyLjgwOSAwIDAgMSAyLjgxIDIuODA3VjE4MGgtMjYuMjV2LTMuMTkzek0xMDEuMjUgMTgyLjI1aDI2LjI1djExLjI1aC0yNi4yNXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjN0Q3MjhFIiBkPSJNLjU4NSAxNjcuMTY2SDE0NC43NXYtMTAuNTI1SC41ODV6Ii8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjEwLjI1NiIgaGVpZ2h0PSIyLjM4NyIgeD0iMzAuMTgiIHk9IjE0OC4zMyIgZmlsbD0iI0VBREVDQyIgcng9IjEuMTkyIi8+CiAgICAgICAgPGVsbGlwc2UgY3g9IjQzLjMzNSIgY3k9IjE0OS40NjkiIGZpbGw9IiNFQURFQ0MiIHJ4PSIxLjAzNSIgcnk9IjEuMDM3Ii8+CiAgICAgICAgPGVsbGlwc2UgY3g9IjQ3Ljc5IiBjeT0iMTQ5LjY3OSIgZmlsbD0iI0VBREVDQyIgcng9IjEuMDM1IiByeT0iMS4wMzciLz4KICAgICAgICA8ZWxsaXBzZSBjeD0iNTIuMjQ1IiBjeT0iMTQ5Ljg4NiIgZmlsbD0iI0VBREVDQyIgcng9IjEuMDM1IiByeT0iMS4wMzciLz4KICAgICAgICA8ZWxsaXBzZSBjeD0iNTYuNyIgY3k9IjE1MC4wOTMiIGZpbGw9IiNFQURFQ0MiIHJ4PSIxLjAzNSIgcnk9IjEuMDM3Ii8+CiAgICAgICAgPGVsbGlwc2UgY3g9IjkuNTc4IiBjeT0iOS40NjkiIGZpbGw9IiMwMDAiIG9wYWNpdHk9Ii4xOCIgcng9IjkuMjkzIiByeT0iOS4zMTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0Ny4zNzUgNDMuNjA0KSIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1MCA0NS44NikiPgogICAgICAgICAgICA8bWFzayBpZD0iZCIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNjIi8+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjREJENEM2IiB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMS4xMDkgMTIuMjI4bDEyLjM5My05LjA5My43MTguOTc5LTEyLjM5MyA5LjA5M3pNLS4zMTYgMTAuMzM5bDEyLjM5My05LjA5NC43MTguOThMLjQwMiAxMS4zMTd6IiBtYXNrPSJ1cmwoI2QpIiBvcGFjaXR5PSIuNSIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZWxsaXBzZSBjeD0iOS42MDciIGN5PSI5LjM1NiIgZmlsbD0iIzAwMCIgb3BhY2l0eT0iLjE4IiByeD0iOS4yOTMiIHJ5PSI5LjMxNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ3Ljc1IDc0LjQyOCkiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTAuMzc1IDc2LjY4MykiPgogICAgICAgICAgICA8bWFzayBpZD0iZiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNlIi8+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjREJENEM2IiB4bGluazpocmVmPSIjZSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMS4xNDMgMTIuMTE3bDEyLjM5My05LjA5My43MTguOTc5LTEyLjM5MyA5LjA5M3pNLS4yODMgMTAuMjNMMTIuMTEgMS4xMzhsLjcxOC45OEwuNDM1IDExLjIxeiIgbWFzaz0idXJsKCNmKSIgb3BhY2l0eT0iLjUiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGVsbGlwc2UgY3g9IjkuNjQxIiBjeT0iOS42MjMiIGZpbGw9IiMwMDAiIG9wYWNpdHk9Ii4xOCIgcng9IjkuMjkzIiByeT0iOS4zMTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0OC4xMjUgMTA0Ljg3NikiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNTAuNzUgMTA3LjUwNykiPgogICAgICAgICAgICA8bWFzayBpZD0iaCIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNnIi8+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjREJENEM2IiB4bGluazpocmVmPSIjZyIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMS4xNzQgMTIuMDA3bDEyLjM5My05LjA5NC43MTguOTc5LTEyLjM5MyA5LjA5M3pNLS4yNTMgMTAuMTE2TDEyLjE0IDEuMDIzIDEyLjg2IDIgLjQ2NiAxMS4wOTV6IiBtYXNrPSJ1cmwoI2gpIiBvcGFjaXR5PSIuNSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
          />
          <LandingCard
            title="Sharing APIs"
            description="Learn how to share your APIs with members of your team on Postman."
            link="https://learning.getpostman.com/docs/postman/design-and-develop-apis/sharing-apis/"
            icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNTciIGhlaWdodD0iNzciIHZpZXdCb3g9IjAgMCA1NyA3NyI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTE0LjM1Mi0yLjE5YTQuNzM3IDQuNzM3IDAgMCAxIDQuNzMzIDQuOTIxbC0uNjkxIDE3LjYzN2E0LjA0NCA0LjA0NCAwIDAgMS04LjA4MyAwTDkuNjIgMi43MzFhNC43MzcgNC43MzcgMCAwIDEgNC43MzMtNC45MjJ6Ii8+CiAgICAgICAgPHBhdGggaWQ9ImMiIGQ9Ik0zLjIwMy4yNDNMLjEgNDUuMjNhMy4wMDIgMy4wMDIgMCAwIDAgMi43ODUgMy4xNzZsNC4yNzMuMzAyYTIuOTg5IDIuOTg5IDAgMCAwIDMuMTIyLTIuMjk2bDMuNTQ0LTE3LjYyNkwxNy41IDQ2LjA3NGEzLjAwMyAzLjAwMyAwIDAgMCAzLjE3NyAyLjIzbDQuMjY1LS4zOWEyLjk4OSAyLjk4OSAwIDAgMCAyLjcwNy0zLjIzTDIzLjUxNS44NDciLz4KICAgICAgICA8cGF0aCBpZD0iZSIgZD0iTS40OTUgMTIuMjQxYTExLjY3IDExLjY3IDAgMCAwIDEuODc3IDYuMjE2bDE5LjgzMy0uMjA0QTExLjY1IDExLjY1IDAgMCAwIDIzLjkgMTEuMzJDMjMuNDk2IDUuNDYzIDE4LjY4MS43MyAxMi44MTMuNDI3Yy0uMjA4LS4wMS0uNDE2LS4wMTUtLjYyMS0uMDE1QzUuNjYyLjQxLjQxNiA1LjczMy40OTUgMTIuMjQyeiIvPgogICAgICAgIDxwYXRoIGlkPSJnIiBkPSJNLjQ5NSAxMi4yNDFhMTEuNjcgMTEuNjcgMCAwIDAgMS44NzcgNi4yMTZsMTkuODMzLS4yMDRBMTEuNjUgMTEuNjUgMCAwIDAgMjMuOSAxMS4zMkMyMy40OTYgNS40NjMgMTguNjgxLjczIDEyLjgxMy40MjdjLS4yMDgtLjAxLS40MTYtLjAxNS0uNjIxLS4wMTVDNS42NjIuNDEuNDE2IDUuNzMzLjQ5NSAxMi4yNDJ6Ii8+CiAgICAgICAgPHBhdGggaWQ9ImkiIGQ9Ik0uNDk1IDEyLjI0MWExMS42NyAxMS42NyAwIDAgMCAxLjg3NyA2LjIxNmwxOS44MzMtLjIwNEExMS42NSAxMS42NSAwIDAgMCAyMy45IDExLjMyQzIzLjQ5NiA1LjQ2MyAxOC42ODEuNzMgMTIuODEzLjQyN2MtLjIwOC0uMDEtLjQxNi0uMDE1LS42MjEtLjAxNUM1LjY2Mi40MS40MTYgNS43MzMuNDk1IDEyLjI0MnoiLz4KICAgICAgICA8cGF0aCBpZD0iayIgZD0iTS40OTUgMTIuMjQxYTExLjY3IDExLjY3IDAgMCAwIDEuODc3IDYuMjE2bDE5LjgzMy0uMjA0QTExLjY1IDExLjY1IDAgMCAwIDIzLjkgMTEuMzJDMjMuNDk2IDUuNDYzIDE4LjY4MS43MyAxMi44MTMuNDI3Yy0uMjA4LS4wMS0uNDE2LS4wMTUtLjYyMS0uMDE1QzUuNjYyLjQxLjQxNiA1LjczMy40OTUgMTIuMjQyeiIvPgogICAgICAgIDxwYXRoIGlkPSJtIiBkPSJNLjQ5NSAxMi4yNDFhMTEuNjcgMTEuNjcgMCAwIDAgMS44NzcgNi4yMTZsMTkuODMzLS4yMDRBMTEuNjUgMTEuNjUgMCAwIDAgMjMuOSAxMS4zMkMyMy40OTYgNS40NjMgMTguNjgxLjczIDEyLjgxMy40MjdjLS4yMDgtLjAxLS40MTYtLjAxNS0uNjIxLS4wMTVDNS42NjIuNDEuNDE2IDUuNzMzLjQ5NSAxMi4yNDJ6Ii8+CiAgICAgICAgPHBhdGggaWQ9Im8iIGQ9Ik0uNDk1IDEyLjI0MWExMS42NyAxMS42NyAwIDAgMCAxLjg3NyA2LjIxNmwxOS44MzMtLjIwNEExMS42NSAxMS42NSAwIDAgMCAyMy45IDExLjMyQzIzLjQ5NiA1LjQ2MyAxOC42ODEuNzMgMTIuODEzLjQyN2MtLjIwOC0uMDEtLjQxNi0uMDE1LS42MjEtLjAxNUM1LjY2Mi40MS40MTYgNS43MzMuNDk1IDEyLjI0MnoiLz4KICAgICAgICA8cGF0aCBpZD0icSIgZD0iTTE1LjgzNyA3LjYxNmMtLjE4NCA0LjA1NC0zLjg3NyA3LjEwNi04LjI0NyA2LjgxNi00LjM3LS4yOS03Ljc2NS0zLjgxMS03LjU4LTcuODY1Qy4yMiAxLjg3NS4zMS0uMDgzIDguMjIzLjQ0MmM3LjkxNC41MjUgNy44MjUgMi40ODQgNy42MTMgNy4xNzQiLz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEgLTIpIj4KICAgICAgICA8ZWxsaXBzZSBjeD0iMTguNjQxIiBjeT0iNzUuNTAzIiBmaWxsPSIjQ0RDOUM1IiBmaWxsLW9wYWNpdHk9Ii4xNjQiIHJ4PSIxNy40ODUiIHJ5PSIzLjQ1NSIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLjA2NCkiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjNjY2IiBkPSJNNDAuMjk4IDI1LjEzbC0uNDQ3LS45MzQgMTcuODUtOC4yNDcuMjA5LjQzNXoiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0U4RTBDQiIgZD0iTTI0LjY2MyAyNy43MnMtMy43NTYgMS4xNzgtNC4zNjcgNC41MjJjLS42MTEgMy4zNDMgOS41NzggNS43MjMgOS41NzggNS43MjNsLjE4LTMuNjAzIi8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM3MjZCNjUiIGQ9Ik0xOC4wNyAxNy43M2wtLjkyMy0xMi41NDUtMS4wNzMuMDhMMTcgMTcuODA2eiIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRTBEQUNFIiBkPSJNOC45MDcgMjguODQ5YTExLjY0NSAxMS42NDUgMCAwIDEtMS42OTYtNi45MzJjLjQwNS01Ljg1OCA1LjIyLTEwLjU5MiAxMS4wODgtMTAuODkzIDYuODEzLS4zNTEgMTIuNCA1LjEgMTIuMzE4IDExLjgxNGExMS42NjQgMTEuNjY0IDAgMCAxLTEuODc4IDYuMjE1Ii8+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyLjI5NyAxNi4wNzQpIj4KICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICA8dXNlIGZpbGw9IiNFNkRERDciIHRyYW5zZm9ybT0icm90YXRlKC0xMTkgMTQuMzUyIDExLjAzMikiIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjRURFN0UyIiBkPSJNMTcuNDk3LS44MTRsLjg1OC40MmE0LjkyNiA0LjkyNiAwIDAgMSAyLjc1NCA0LjY3bC0uNTIyIDEwLjQ3YTQuMDk5IDQuMDk5IDAgMCAxLTMuOTk1IDMuODk0IDMuNTU1IDMuNTU1IDAgMCAxLTMuNjM4LTMuNzFsLjU4NS0xMy4zOTRhMi43NSAyLjc1IDAgMCAxIDMuOTU4LTIuMzV6IiBtYXNrPSJ1cmwoI2IpIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTE5IDE3LjAzMyA4Ljc3MykiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjY2NyAyOCkiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgIDx1c2UgZmlsbD0iI0VERTdFMiIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjcuNzU1IDApIiB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0U2RERENyIgZD0iTTQuMTggMi4wNjVhMy4zNzUgMy4zNzUgMCAwIDEgMy4zNzMgMy40ODhMNy4wMyAyMS4xNDhhMi44NSAyLjg1IDAgMCAxLTUuNjk3IDBMLjgwNyA1LjU1M0EzLjM3NSAzLjM3NSAwIDAgMSA0LjE4IDIuMDY1eiIgbWFzaz0idXJsKCNkKSIgdHJhbnNmb3JtPSJyb3RhdGUoNyA0LjE4IDEyLjk4MykiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAzMS4xMTIgMTAuNTk2KSI+CiAgICAgICAgICAgICAgICA8bWFzayBpZD0iZiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjZSIvPgogICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0JDQjE5OSIgZD0iTTI5LjI4NSAyOC43MDhsLTEuMDAzLjAxLS4xMy0xMC41NTEgMS4wMDQtLjAxMXoiIG1hc2s9InVybCgjZikiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAzMS4xMTIgMTAuNTk2KSI+CiAgICAgICAgICAgICAgICA8bWFzayBpZD0iaCIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjZyIvPgogICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iI0JDQjE5OSIgZD0iTTM2LjE0NCAyOC40N2wtMS4wMDQuMDEtLjEzLTEwLjU1MSAxLjAwNS0uMDF6IiBtYXNrPSJ1cmwoI2gpIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMzEuMTEyIDEwLjU5NikiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9ImoiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2kiLz4KICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNCQ0IxOTkiIGQ9Ik0yNi42ODIgNDQuNDk4bC0yNy42NTguMjg1LS4wMTItMS4wMDQgMjcuNjU4LS4yODV6IiBtYXNrPSJ1cmwoI2opIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMzEuMTEyIDEwLjU5NikiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9ImwiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2siLz4KICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNCQ0IxOTkiIGQ9Ik0yNi4xNTYgNDkuMzk1bC0yNy42NTcuMjg1LS4wMTMtMS4wMDQgMjcuNjU4LS4yODR6IiBtYXNrPSJ1cmwoI2wpIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMzEuMTEyIDEwLjU5NikiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im4iIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI20iLz4KICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNCQ0IxOTkiIGQ9Ik0yNi4xNzMgNTQuMTYxbC0yNy42NTguMjg1LS4wMTItMS4wMDQgMjcuNjU4LS4yODR6IiBtYXNrPSJ1cmwoI24pIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMzEuMTEyIDEwLjU5NikiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9InAiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI28iLz4KICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNCQ0IxOTkiIGQ9Ik0yNi4zNTQgNTguNzU5bC0yNy42NTcuMjg0LS4wMTItMS4wMDMgMjcuNjU4LS4yODV6IiBtYXNrPSJ1cmwoI3ApIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0ZGNkMzNyIgZD0iTTE0LjQ5NyA2LjQ4YTIuNDE5IDIuNDE5IDAgMSAwIDMuODQ0LTIuOTM2IDIuNDE5IDIuNDE5IDAgMCAwLTMuODQ0IDIuOTM2Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNFMDVCMkIiIGQ9Ik0xNC4wMDUgNC44NThjLjA4Ni4yMDUuMjA0LjQwMi4zNTQuNTg1Ljg3IDEuMDYyIDIuNDk3IDEuMjY0IDMuNjM0LjQ1M2EyLjQzIDIuNDMgMCAwIDAgLjg0LTEuMDM5IDIuNDE5IDIuNDE5IDAgMSAxLTQuODI4IDB6Ii8+CiAgICAgICAgICAgIDxlbGxpcHNlIGN4PSIxNi4zMzQiIGN5PSIzLjYzIiBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4zNCIgcng9IjEiIHJ5PSIxIi8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNFOEUwQ0IiIGQ9Ik04LjkwNyAyOC44NDlhMTEuNjQ1IDExLjY0NSAwIDAgMS0xLjY5Ni02LjkzMmMuNDA1LTUuODU4IDUuMjItMTAuNTkyIDExLjA4OC0xMC44OTMgNi44MTMtLjM1MSAxMi40IDUuMSAxMi4zMTggMTEuODE0YTExLjY2NCAxMS42NjQgMCAwIDEtMS44NzggNi4yMTUiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0VERTdFMiIgZD0iTTguOTA3IDI4Ljg0OWExMS42NDUgMTEuNjQ1IDAgMCAxLTEuNjk2LTYuOTMyYy40MDUtNS44NTggNS4yMi0xMC41OTIgMTEuMDg4LTEwLjg5MyA2LjgxMy0uMzUxIDEyLjQgNS4xIDEyLjMxOCAxMS44MTRhMTEuNjY0IDExLjY2NCAwIDAgMS0xLjg3OCA2LjIxNSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkY2QzM3IiBkPSJNMjYuMTg1IDM5LjU5OGgtMy4wMjJjLS4yNCAwLS40MzYtLjIxNC0uNDM2LS40NzhWMzYuMThjMC0uMjYzLjE5NS0uNDc3LjQzNi0uNDc3aDMuMDIyYy4yNCAwIC40MzYuMjE0LjQzNi40Nzd2Mi45MzljMCAuMjY0LS4xOTUuNDc4LS40MzYuNDc4Ii8+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjQ0NSAxNS41NTYpIj4KICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJyIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNxIi8+CiAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICA8dXNlIGZpbGw9IiNCNENCRDUiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDE1LjkgMCkiIHhsaW5rOmhyZWY9IiNxIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPSIjQTJCQUM4IiBkPSJNLTEuNTMgNS44MDdhNy4zOTUgNy4zOTUgMCAwIDEtLjAyNi0uNjIyYzAtNC4yOTUgMy43MTUtNy43NzggOC4yOTctNy43NzguMjEgMCAuNDIuMDA4LjYyNi4wMjIuMjIxLS4wMTQuNDQ1LS4wMjIuNjctLjAyMiA1LjI5OCAwIDkuNTkzIDQuMDYzIDkuNTkzIDkuMDc1IDAgNS4wMTEtNC4yOTUgOS4wNzQtOS41OTMgOS4wNzRzLTkuNTkzLTQuMDYzLTkuNTkzLTkuMDc0YzAtLjIyNy4wMS0uNDUyLjAyNy0uNjc1em0wIDBjLjMzOCA0LjAwNSAzLjkxMiA3LjE1NiA4LjI3IDcuMTU2IDQuNTgzIDAgOC4yOTctMy40ODIgOC4yOTctNy43NzggMC00LjA5OC0zLjM4LTcuNDU2LTcuNjctNy43NTYtNC43NS4zMS04LjU0OCAzLjg5LTguODk2IDguMzc4eiIgbWFzaz0idXJsKCNyKSIvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjE0Ljc3OCIgY3k9IjE4LjkyNiIgcj0iMSIgZmlsbD0iI0ZGRiIgb3BhY2l0eT0iLjMiLz4KICAgICAgICAgICAgPGVsbGlwc2UgY3g9IjE3LjYzIiBjeT0iMjAuNzQxIiBmaWxsPSIjRjBGNEY4IiBmaWxsLW9wYWNpdHk9Ii4zNCIgb3BhY2l0eT0iLjMiIHJ4PSIyLjA3NCIgcnk9IjEuNTU2Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiM3MjZCNjUiIGQ9Ik04LjU5MiAyMS45N2MtLjIyNy41Mi0uMDkzIDEuMjE1LjMwMyAxLjU1My4zOTQuMzM4Ljg5OC4xOSAxLjEyNi0uMzMuMjI3LS41Mi4wOTItMS4yMTQtLjMwMy0xLjU1Mi0uMzk0LS4zMzgtLjg5OS0uMTktMS4xMjYuMzMiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0VERTdFMiIgZD0iTTkuODQgMjkuMDg2YTQuMDg1IDQuMDg1IDAgMCAxIDMuMjgyIDQuODg4TDkuODU4IDQ5LjA0YTMuNDg2IDMuNDg2IDAgMSAxLTYuODYtMS4yMWwyLjA4NC0xNS4yNzRhNC4wODUgNC4wODUgMCAwIDEgNC43NTctMy40N3oiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="
          />
          <LandingCard
            title="Versioning APIs"
            description="Learn how to manage multiple versions of your APIs with version tags."
            link="https://learning.getpostman.com/docs/postman/design-and-develop-apis/versioning-an-api/"
            icon="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2OSIgaGVpZ2h0PSI2OCIgdmlld0JveD0iMCAwIDY5IDY4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0YyNkY0MCIgZD0iTTM0Ljc5NiA1Ny45ODdsLTE3LjIyNSA5Ljg0TC45MTggNTguMjUzLjg2MiAzOC42NjhsMTcuMjI1LTkuODQgMTYuNjUzIDkuNTc1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGMjZGNDAiIGQ9Ik0zNC43NCAzOC4yNzZsLjA1NiAxOS41MzUtMTcuMjE2IDkuODE2LS4wNTYtMTkuNTM1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNENDRFMjciIGQ9Ik0xNy41MjQgNjcuODI4TC45MTggNTguMjU1Ljg2MiAzOC42NzhsMTYuNjA2IDkuNTcyeiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGNDgxNUIiIGQ9Ik0xNy41NDIgNDguMzI4TC44NjIgMzguNzFsMTcuMjU0LTkuODgzIDE2LjY4IDkuNjE3eiIvPgogICAgICAgIDxnPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRjI2RjQwIiBkPSJNNjguMjc5IDU3Ljk4N2wtMTcuMjI1IDkuODRMMzQuNCA1OC4yNTNsLS4wNTYtMTkuNTg0IDE3LjIyNS05Ljg0IDE2LjY1MyA5LjU3NXoiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0YyNkY0MCIgZD0iTTY4LjIyMyAzOC4yNzZsLjA1NiAxOS41MzUtMTcuMjE2IDkuODE2LS4wNTYtMTkuNTM1eiIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRDQ0RTI3IiBkPSJNNTEuMDA3IDY3LjgyOGwtMTYuNjA2LTkuNTczLS4wNTYtMTkuNTc3TDUwLjk1IDQ4LjI1eiIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRjQ4MTVCIiBkPSJNNTEuMDI1IDQ4LjMyOGwtMTYuNjgtOS42MTcgMTcuMjU0LTkuODgzIDE2LjY4IDkuNjE3eiIvPgogICAgICAgIDwvZz4KICAgICAgICA8Zz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0YyNkY0MCIgZD0iTTUyLjcyNyAyOS4wMjJsLTE3LjIyNSA5Ljg0LTE2LjY1My05LjU3NS0uMDU2LTE5LjU4NSAxNy4yMjUtOS44NCAxNi42NTMgOS41NzV6Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGMjZGNDAiIGQ9Ik01Mi42NzEgOS4zMWwuMDU2IDE5LjUzNi0xNy4yMTYgOS44MTUtLjA1Ni0xOS41MzV6Ii8+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNENDRFMjciIGQ9Ik0zNS40NTUgMzguODYyTDE4Ljg1IDI5LjI5bC0uMDU2LTE5LjU3N0wzNS40IDE5LjI4NXoiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0Y0ODE1QiIgZD0iTTM1LjQ3MyAxOS4zNjJsLTE2LjY4LTkuNjE3TDM2LjA0Ny0uMTM4bDE2LjY4IDkuNjE3eiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
          />
        </div>
        <div className="row justify-content-center">
          <SecondaryCard
            title="Automate Your API Tests"
            description="Integrate Postman testing into your CI/CD pipeline."
            cta="Learn More"
            ctaLink="https://www.getpostman.com/automated-testing"
          />
          <SecondaryCard
            title="Case Studies"
            description="Discover how teams are using Postman in new and creative ways."
            cta="Learn More"
            ctaLink="https://www.getpostman.com/resources/case-studies/"
          />
          <SecondaryCard
            title="Postman for QA Teams"
            description="Simple and flexible automated testing solutions for QA teams."
            cta="Learn More"
            ctaLink="https://learning.getpostman.com/qa"
          />
        </div>
      </div>
    </section>

    <section className="row" style={videoStyle}>
      <div className="col-md-8">
        <ResponsiveEmbed
          src="https://www.youtube.com/embed/Ayo_KdLLcTA?list=PLM-7VG-sgbtBE0mqMBlAYNuqTkhJzFjlP"
          allowFullScreen
        />
      </div>
      <div className="col-md-4" style={{ paddingLeft: '32px' }}>
        <h2>Exploring API Documentation with Postman</h2>
        <p>
Postman’s API documentation feature lets you share public or private API documentation
          in a beautifully formated web page.
        </p>
        <p>See how to document your APIs with Postman.</p>
        <a className="link-style" href="/docs/postman/api-documentation/intro-to-api-documentation/">Learn More</a>
      </div>
    </section>

    <section className="row">
      <div className="col-md-12 text-center " style={landingBottom}>
        <h2 style={landingBottomContent}>Didn&#39;t find what you&#39;re looking for?</h2>
        <a href="https://www.getpostman.com/support" className="btn btn__primary">Visit our Support Center</a>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
