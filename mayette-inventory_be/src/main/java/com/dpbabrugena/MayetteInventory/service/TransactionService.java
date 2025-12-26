package com.dpbabrugena.MayetteInventory.service;

import com.dpbabrugena.MayetteInventory.dto.Response;
import com.dpbabrugena.MayetteInventory.dto.TransactionRequest;
import com.dpbabrugena.MayetteInventory.enums.TransactionStatus;

public interface TransactionService {
    Response restockInventory(TransactionRequest transactionRequest);
    Response sell(TransactionRequest transactionRequest);
    Response returnToSupplier(TransactionRequest transactionRequest);
    Response getAllTransactions(int page, int size, String searchText);
    Response getTransactionById(Long id);
    Response getAllTransactionByMonthAndYear(int month, int year);
    Response updateTransactionStatus(Long transactionId, TransactionStatus transactionStatus);
}
