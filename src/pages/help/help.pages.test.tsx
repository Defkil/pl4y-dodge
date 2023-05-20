import { render } from '@solidjs/testing-library';
import {describe} from "vitest";
import HelpPages from "./help.pages";

describe('<HomePages />', () => {
  it('should render with a title', () => {
    const { container } = render(() => (
      <HelpPages />
    ));
    expect(document.title).toContain('Help - Dodge.Pl4y.app');
  });
});
