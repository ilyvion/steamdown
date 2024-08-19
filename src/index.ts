import * as core from "@actions/core";
import parse from "steamdown";

try {
    const markdown = core.getInput("markdown", { required: true });
    const escapeQuotes = core.getBooleanInput("escape-quotes");
    core.info("Escape quotes: " + escapeQuotes);
    core.startGroup("Input markup");
    core.info(markdown);
    core.endGroup();
    let steamMarkup = parse(markdown);
    if (escapeQuotes) {
        steamMarkup = steamMarkup.replace(/"/g, '\\"');
    }
    core.startGroup("Output markup");
    core.info(steamMarkup);
    core.endGroup();
    core.setOutput("steam-markup", steamMarkup);
} catch (error: unknown) {
    if (error instanceof Error) {
        core.setFailed(error.message);
    } else {
        core.setFailed(JSON.stringify(error));
    }
}
