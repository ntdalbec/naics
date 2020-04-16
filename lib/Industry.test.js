const Industry = require("./Industry");

const softwarePublishers = Industry.from("51121");

test("Initializes an Industry", () => {
    expect(softwarePublishers).toBeTruthy();
});

test("Industry initializes its properties", () => {
    expect(softwarePublishers.code).toBe("51121");
    expect(softwarePublishers.title).toBe("Software Publishers");
    expect(softwarePublishers.description).toBe(
        "See industry description for 511210."
    );
    expect(softwarePublishers.category).toBe("NAICSIndustry");
});

test("Industry returns its type", () => {
    expect(softwarePublishers.category).toBe("NAICSIndustry");
});

test("Industry returns its descendants", () => {
    const IT = Industry.from("51");
    const descendants = IT.descendants();
    expect(descendants.some((desc) => desc.code === "51121")).toBeTruthy;
    expect(descendants.some((desc) => desc.code === "335991")).toBeFalsy;
});

test("Industry returns its children", () => {
    const publishing = Industry.from("511");
    const children = publishing.children();
    expect(children.some((child) => child.code === "5112")).toBeTruthy;
    expect(children.some((child) => child.code === "51121")).toBeFalsy;
});

test("Industry returns its parent", () => {
    const parent = softwarePublishers.parent();
    expect(parent.title).toBe("Software Publishers");
    expect(parent.parent().title).toBe(
        "Publishing Industries (except Internet)"
    );
});
