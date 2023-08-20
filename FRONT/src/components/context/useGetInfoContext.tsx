import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export interface IGetProductsProps {
  carrinho: any[],
  setCarrinho: React.Dispatch<React.SetStateAction<any[]>>,

  quantidadeProdutos: number,
  setQuantidadeProdutos: React.Dispatch<React.SetStateAction<number>>,

  valorTotalCarrinho: number,
  setValorTotalCarrinho: React.Dispatch<React.SetStateAction<number>>,

  adicionarProduto: (novoProduto: any) => void

  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,

  handleFinishShooping: () => void

}

export const useGetInfoContext = createContext<IGetProductsProps>({} as unknown as IGetProductsProps)

export const useGetProductsContext = () =>
  useContext<IGetProductsProps>(useGetInfoContext)

export const GetProductsProvider = ({ children }: React.PropsWithChildren) => {
  const [carrinho, setCarrinho] = useState<any>([]);
  const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);
  const [valorTotalCarrinho, setValorTotalCarrinho] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const mudarQuantidade = useCallback((id: any, quantidade: any) => {
    return carrinho.map((itemDoCarrinho: any) => {
      if (itemDoCarrinho.id === id) itemDoCarrinho.quantidade += quantidade;
      return itemDoCarrinho;
    });
  }, [carrinho])

  const adicionarProduto = useCallback((novoProduto: any) => {
    const temOProduto = carrinho.some(
      (itemDoCarrinho: any) => itemDoCarrinho.id === novoProduto.id
    );
    if (!temOProduto) {
      novoProduto.quantidade = 1;
      return setCarrinho((carrinhoAnterior: any) => [
        ...carrinhoAnterior,
        novoProduto,
      ]);
    }
    setCarrinho(mudarQuantidade(novoProduto.id, 1));

  }, [carrinho, mudarQuantidade])

  const handleFinishShooping = useCallback(() => {
    setIsOpen(!isOpen)

  }, [isOpen])

  const value = useMemo(
    () => ({
      carrinho,
      setCarrinho,
      quantidadeProdutos,
      setQuantidadeProdutos,
      valorTotalCarrinho,
      setValorTotalCarrinho,
      adicionarProduto,
      isOpen,
      setIsOpen,
      handleFinishShooping
    }), [
    carrinho,
    setCarrinho,
    quantidadeProdutos,
    setQuantidadeProdutos,
    valorTotalCarrinho,
    setValorTotalCarrinho,
    adicionarProduto,
    isOpen,
    setIsOpen,
    handleFinishShooping
  ])

  return (
    <useGetInfoContext.Provider value={value}>
      {children}
    </useGetInfoContext.Provider>
  )
}
