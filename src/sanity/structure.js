export const structure = (S) =>
  S.list()
    .title("Novel Writing App")
    .items([
      // --- Content Section ---
      S.listItem()
        .title("Content")
        .child(
          S.list()
            .title("Content")
            .items([
              S.documentTypeListItem("novelContent").title("All Articles"),
              // later you can add: chapters, drafts, notes, etc.
            ])
        ),

      S.divider(),

      // --- Users Section ---
      S.listItem()
        .title("Users")
        .child(
          S.list()
            .title("Users")
            .items([
              S.documentTypeListItem("userCredentials").title("User Credentials"),
              // future: profiles, roles, permissions
            ])
        ),

      S.divider(),

      // --- Everything else (catch all) ---
      S.listItem()
        .title("Other Schemas")
        .child(
          S.list()
            .title("Other")
            .items(
              S.documentTypeListItems().filter(
                (item) =>
                  item.getId() !== "novelContent" &&
                  item.getId() !== "userCredentials"
              )
            )
        ),
    ]);
