import { Component } from 'solid-js';
import {setDocumentTitle} from "../../services/domManipulation.service";

const PlayPages: Component = () => {
  setDocumentTitle('Playing - Dodge.Pl4y.app')
  return (
    <>
      <div>
        Play
      </div>
    </>
  );
};

export default PlayPages;
