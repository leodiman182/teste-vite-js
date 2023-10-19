import { describe, it, expect } from "vitest";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

// describe('MyComponent', () => {
//   it('deve renderizar corretamente com contexto', () => {
//     const { container } = render(
//         <AppContext.Provider value={{ /* Seus valores de contexto aqui */ }}>
//           App
//           {/* Conteúdo do componente aqui */}
//         </AppContext.Provider>
//     );

//     // Realize asserções aqui, como verificar se um elemento está presente ou se o contexto está sendo usado corretamente.
//   });
// });
