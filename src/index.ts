import * as core from "@actions/core";
import parse from "steamdown";

try {
    const markdown = core.getInput("markdown");
    const steamMarkup = parse(markdown);
    core.setOutput("steam-markup", steamMarkup);
} catch (error: unknown) {
    if (error instanceof Error) {
        core.setFailed(error.message);
    } else {
        core.setFailed(JSON.stringify(error));
    }
}
