import { Component } from 'solid-js';
import {setDocumentTitle} from "../../services/domManipulation.service";

const HelpPages: Component = () => {
  setDocumentTitle('Help - Dodge.Pl4y.app')
  return (
    <>
      <div>
        Help
      </div>
    </>
  );
};

export default HelpPages;

