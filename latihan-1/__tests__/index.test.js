const Restriction = require("hacktiv8-restriction");
const { execSync } = require("child_process");
const fs = require("fs");

const reconstructedFilename = "reconstructed.js";

const bikilipikDiskon = (name, role, birthMonth) => {
  let solution = fs.readFileSync("./index.js", "utf-8");

  solution = solution.replace(
    /(let|var) name .*/,
    // to handle undefined or null, it should not be quoted
    `$1 name = ${typeof name === "string" ? `"${name}"` : name}`
  );

  solution = solution.replace(
    /(let|var) role .*/,
    // to handle undefined or null, it should not be quoted
    `$1 role = ${typeof role === "string" ? `"${role}"` : role}`
  );

  solution = solution.replace(
    /(let|var) birthMonth .*/,
    // to handle undefined or null, it should not be quoted
    `$1 birthMonth = ${
      typeof birthMonth === "string" ? `"${birthMonth}"` : birthMonth
    }`
  );

  fs.writeFileSync(reconstructedFilename, solution);

  return String(execSync(`node ${reconstructedFilename}`));
};

afterAll(() => {
  if (fs.existsSync(reconstructedFilename)) {
    fs.unlinkSync(reconstructedFilename);
  }
});

describe("Bikilipik Diskon", () => {
  it("should be able to handle if name is falsy value (15)", () => {
    const result1 = bikilipikDiskon("", "member baru", "Januari");
    expect(result1).toMatch(/Nama tidak boleh kosong!/i);
  });

  it("should be able to handle every conditions (70)", () => {
    const result1 = bikilipikDiskon("Jaka", "belum terdaftar", "Januari");
    const result2 = bikilipikDiskon("Joko", "member baru", "Januari");
    const result3 = bikilipikDiskon("Aji", "member lama", "Januari");
    const result4 = bikilipikDiskon("Johan", "member baru", "Maret");
    const result5 = bikilipikDiskon("Jojo", "member lama", "April");
    expect(result1).toMatch(
      /Selamat datang di Bikilipik, Jaka. Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu/i
    );
    expect(result2).toMatch(
      /Selamat Joko!. Anda berhak mendapatkan voucher diskon sebesar 50%!/i
    );
    expect(result3).toMatch(
      /Selamat Aji!. Anda berhak mendapatkan voucher diskon sebesar 30%!/i
    );
    expect(result4).toMatch(
      /Maaf Johan, voucher diskon hanya untuk yang lahir di bulan Januari./i
    );
    expect(result5).toMatch(
      /Maaf Jojo, voucher diskon hanya untuk yang lahir di bulan Januari./i
    );
  });

  it("should check restriction rules (-20)", async () => {
    const checkRestriction = new Restriction("../index.js");
    checkRestriction.rules = ["match", "split", "concat", "pop"];
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  });
});
