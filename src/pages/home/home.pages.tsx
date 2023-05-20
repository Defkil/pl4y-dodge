import { Component } from 'solid-js';
import {setDocumentTitle} from "../../services/domManipulation.service";

const HomePages: Component = () => {
  setDocumentTitle('Dodge - Pl4y.app')
  return (
    <>
      <div>
        Home
      </div>
    </>
  );
};

export default HomePages;

