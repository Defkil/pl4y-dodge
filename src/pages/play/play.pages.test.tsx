import { render } from '@solidjs/testing-library';
import {describe} from "vitest";
import PlayPages from "./play.pages";

describe('<PlayPages />', () => {
  it('should render with a title', () => {
    const { container } = render(() => (
      <PlayPages />
    ));
    expect(document.title).toContain('Playing - Dodge.Pl4y.app');
  });
});

